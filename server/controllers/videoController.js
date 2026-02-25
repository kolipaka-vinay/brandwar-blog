import prisma from "../config/prismaClient.js"

// GET VIDEO FOLDER
export const getVideoFolders = async (req, res) => {
  try {
    const { adminId } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) return res.status(401).json({ message: "User not found" });
    if (!user.isActive) return res.status(403).json({ message: "Account blocked" });

    let targetUserId;

    if (user.role === "SUPERADMIN" && adminId) {
      targetUserId = adminId;
    } else {
      targetUserId = user.id;
    }

    const folders = await prisma.videoFolder.findMany({
      where: { userId: targetUserId },
      include: {
        videos: {
          orderBy: { createdAt: "desc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(folders);

  } catch (err) {
    console.error("GET VIDEO FOLDERS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// CREATE VIDEO FOLDER
export const createVideoFolder = async (req, res) => {
  try {
    const { adminId } = req.params;
    const { title } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user)
      return res.status(401).json({ message: "User not found" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account blocked" });

    // ✅ NEW: allowVideos validation
    if (!user.allowVideos && user.role !== "SUPERADMIN") {
      return res.status(403).json({
        message: "You are not allowed to create video folders",
      });
    }

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Folder title required" });
    }

    let targetUserId;

    if (user.role === "SUPERADMIN" && adminId) {
      targetUserId = adminId;
    } else {
      targetUserId = user.id;
    }

    const folder = await prisma.videoFolder.create({
      data: {
        title: title.trim(),
        userId: targetUserId,
      },
    });

    res.status(201).json(folder);

  } catch (err) {
    console.error("CREATE VIDEO FOLDER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
// export const createVideoFolder = async (req, res) => {
//   try {
//     const { adminId } = req.params;
//     const { title } = req.body;

//     const user = await prisma.user.findUnique({
//       where: { id: req.user.id },
//     });

//     if (!user) return res.status(401).json({ message: "User not found" });
//     if (!user.isActive) return res.status(403).json({ message: "Account blocked" });

//     if (!title || title.trim() === "") {
//       return res.status(400).json({ message: "Folder title required" });
//     }

//     let targetUserId;

//     if (user.role === "SUPERADMIN" && adminId) {
//       targetUserId = adminId;
//     } else {
//       targetUserId = user.id;
//     }

//     const folder = await prisma.videoFolder.create({
//       data: {
//         title: title.trim(),
//         userId: targetUserId,
//       },
//     });

//     res.status(201).json(folder);

//   } catch (err) {
//     console.error("CREATE VIDEO FOLDER ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };

//UPDATE VIDEO FOLDER
export const updateVideoFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user)
      return res.status(401).json({ message: "User not found" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account blocked" });

    // ✅ Validate title
    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Folder title is required",
      });
    }

    const folder = await prisma.videoFolder.findUnique({
      where: { id },
    });

    if (!folder)
      return res.status(404).json({ message: "Folder not found" });

    if (user.role !== "SUPERADMIN") {
      if (folder.userId !== user.id) {
        return res.status(403).json({ message: "Not allowed" });
      }
    }

    const updatedFolder = await prisma.videoFolder.update({
      where: { id },
      data: {
        title: title.trim(),
      },
    });

    res.json(updatedFolder);

  } catch (err) {
    console.error("UPDATE VIDEO FOLDER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
// export const updateVideoFolder = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title } = req.body;

//     const user = await prisma.user.findUnique({
//       where: { id: req.user.id },
//     });

//     if (!user) return res.status(401).json({ message: "User not found" });
//     if (!user.isActive) return res.status(403).json({ message: "Account blocked" });

//     const folder = await prisma.videoFolder.findUnique({
//       where: { id },
//     });

//     if (!folder) return res.status(404).json({ message: "Folder not found" });

//     if (user.role !== "SUPERADMIN") {
//       if (folder.userId !== user.id) {
//         return res.status(403).json({ message: "Not allowed" });
//       }
//     }

//     const updatedFolder = await prisma.videoFolder.update({
//       where: { id },
//       data: { title: title?.trim() },
//     });

//     res.json(updatedFolder);

//   } catch (err) {
//     console.error("UPDATE VIDEO FOLDER ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };

//DELETE VIDEO FOLDER
export const deleteVideoFolder = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) return res.status(401).json({ message: "User not found" });
    if (!user.isActive) return res.status(403).json({ message: "Account blocked" });

    const folder = await prisma.videoFolder.findUnique({
      where: { id },
    });

    if (!folder) return res.status(404).json({ message: "Folder not found" });

    if (user.role !== "SUPERADMIN") {
      if (folder.userId !== user.id) {
        return res.status(403).json({ message: "Not allowed" });
      }
    }

    await prisma.videoFolder.delete({
      where: { id },
    });

    res.json({ message: "Folder deleted successfully" });

  } catch (err) {
    console.error("DELETE VIDEO FOLDER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};







//GET VIDEOS
export const getVideos = async (req, res) => {
  try {
    const { folderId } = req.params;

    // 1️⃣ Get logged-in user
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user)
      return res.status(401).json({ message: "User not found" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account blocked" });

    // 2️⃣ Find folder
    const folder = await prisma.videoFolder.findUnique({
      where: { id: folderId },
    });

    if (!folder)
      return res.status(404).json({ message: "Folder not found" });

    // 3️⃣ Permission check
    if (user.role !== "SUPERADMIN") {
      if (folder.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to view videos in this folder",
        });
      }
    }

    // 4️⃣ Get videos
    const videos = await prisma.video.findMany({
      where: { folderId },
      orderBy: { createdAt: "desc" },
    });

    res.json(videos);

  } catch (error) {
    console.error("GET VIDEOS ERROR:", error);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};


//CREATE VIDEO
export const createVideo = async (req, res) => {
  try {
    const { folderId } = req.params;
    const { title, language, location, url } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user)
      return res.status(401).json({ message: "User not found" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account blocked" });

    // ✅ allowVideos validation
    if (!user.allowVideos && user.role !== "SUPERADMIN") {
      return res.status(403).json({
        message: "You are not allowed to create videos",
      });
    }

    // ✅ Clean & validate title
    const cleanedTitle = title?.trim();
    if (!cleanedTitle) {
      return res.status(400).json({
        message: "Video title is required",
      });
    }

    // ✅ Clean & validate url
    const cleanedUrl = url?.trim();
    if (!cleanedUrl) {
      return res.status(400).json({
        message: "Video URL is required",
      });
    }

    const folder = await prisma.videoFolder.findUnique({
      where: { id: folderId },
    });

    if (!folder)
      return res.status(404).json({ message: "Folder not found" });

    // Ownership check
    if (user.role !== "SUPERADMIN") {
      if (folder.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to add video to this folder",
        });
      }
    }

    const video = await prisma.video.create({
      data: {
        title: cleanedTitle,
        language,
        location,
        url: cleanedUrl,
        folderId,
      },
    });

    res.status(201).json(video);

  } catch (err) {
    console.error("CREATE VIDEO ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
// export const createVideo = async (req, res) => {
//   try {
//     const { folderId } = req.params;
//     const { title, language, location, url } = req.body;

//     const user = await prisma.user.findUnique({
//       where: { id: req.user.id },
//     });

//     if (!user) return res.status(401).json({ message: "User not found" });
//     if (!user.isActive) return res.status(403).json({ message: "Account blocked" });

//     const folder = await prisma.videoFolder.findUnique({
//       where: { id: folderId },
//     });

//     if (!folder) return res.status(404).json({ message: "Folder not found" });

//     if (user.role !== "SUPERADMIN") {
//       if (folder.userId !== user.id) {
//         return res.status(403).json({
//           message: "Not allowed to add video to this folder",
//         });
//       }
//     }

//     const video = await prisma.video.create({
//       data: {
//         title,
//         language,
//         location,
//         url,
//         folderId,
//       },
//     });

//     res.status(201).json(video);

//   } catch (err) {
//     console.error("CREATE VIDEO ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };

//UPDATE VIDEO
export const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, language, location, url } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user)
      return res.status(401).json({ message: "User not found" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account blocked" });

    // ✅ allowVideos validation
    if (!user.allowVideos && user.role !== "SUPERADMIN") {
      return res.status(403).json({
        message: "You are not allowed to update videos",
      });
    }

    const video = await prisma.video.findUnique({
      where: { id },
      include: { folder: true },
    });

    if (!video)
      return res.status(404).json({ message: "Video not found" });

    // Ownership check
    if (user.role !== "SUPERADMIN") {
      if (video.folder.userId !== user.id) {
        return res.status(403).json({ message: "Not allowed" });
      }
    }

    // ✅ Validate title
    const cleanedTitle = title?.trim();
    if (!cleanedTitle) {
      return res.status(400).json({
        message: "Video title is required",
      });
    }

    // ✅ Validate url
    const cleanedUrl = url?.trim();
    if (!cleanedUrl) {
      return res.status(400).json({
        message: "Video URL is required",
      });
    }

    // Optional: URL format validation
    try {
      new URL(cleanedUrl);
    } catch {
      return res.status(400).json({
        message: "Invalid video URL format",
      });
    }

    const updatedVideo = await prisma.video.update({
      where: { id },
      data: {
        title: cleanedTitle,
        language,
        location,
        url: cleanedUrl,
      },
    });

    res.json(updatedVideo);

  } catch (err) {
    console.error("UPDATE VIDEO ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
// export const updateVideo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, language, location, url } = req.body;

//     const user = await prisma.user.findUnique({
//       where: { id: req.user.id },
//     });

//     if (!user) return res.status(401).json({ message: "User not found" });
//     if (!user.isActive) return res.status(403).json({ message: "Account blocked" });

//     const video = await prisma.video.findUnique({
//       where: { id },
//       include: { folder: true },
//     });

//     if (!video) return res.status(404).json({ message: "Video not found" });

//     if (user.role !== "SUPERADMIN") {
//       if (video.folder.userId !== user.id) {
//         return res.status(403).json({ message: "Not allowed" });
//       }
//     }

//     const updatedVideo = await prisma.video.update({
//       where: { id },
//       data: {
//         title,
//         language,
//         location,
//         url,
//       },
//     });

//     res.json(updatedVideo);

//   } catch (err) {
//     console.error("UPDATE VIDEO ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// };


// DELETE VIDEO
export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) return res.status(401).json({ message: "User not found" });
    if (!user.isActive) return res.status(403).json({ message: "Account blocked" });

    const video = await prisma.video.findUnique({
      where: { id },
      include: { folder: true },
    });

    if (!video) return res.status(404).json({ message: "Video not found" });

    if (user.role !== "SUPERADMIN") {
      if (video.folder.userId !== user.id) {
        return res.status(403).json({ message: "Not allowed" });
      }
    }

    await prisma.video.delete({
      where: { id },
    });

    res.json({ message: "Video deleted successfully" });

  } catch (err) {
    console.error("DELETE VIDEO ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};