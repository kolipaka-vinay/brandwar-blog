import prisma from "../config/prismaClient.js";

//CREATE IMAGE-FOLDER
export const createImageFolder = async (req, res) => {
  try {
    const { adminId } = req.params; // optional (only for superadmin use)
    const { title } = req.body;

    // 1️⃣ Get logged-in user
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Folder title required" });
    }

    let targetUserId;

    // 2️⃣ Permission Logic
    if (user.role === "SUPERADMIN" && adminId) {
      // SuperAdmin creating folder for admin
      targetUserId = adminId;
    } else {
      // Normal user → can create only for themselves
      targetUserId = user.id;
    }

    const folder = await prisma.imageFolder.create({
      data: {
        title: title.trim(),
        userId: targetUserId,
      },
    });

    res.status(201).json(folder);

  } catch (error) {
    console.error("CREATE FOLDER ERROR:", error);
    res.status(500).json({ error: "Failed to create folder" });
  }
};


//UPDATE IMAGE-FOLDER
export const updateImageFolder = async (req, res) => {
  try {
    const { id, adminId } = req.params; // folder id + optional adminId
    const { title } = req.body;

    // 1️⃣ Get logged-in user
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account blocked" });
    }

    // 2️⃣ Find folder
    const folder = await prisma.imageFolder.findUnique({
      where: { id },
    });

    if (!folder) {
      return res.status(404).json({ message: "Folder not found" });
    }

    // 3️⃣ Permission logic
    if (user.role !== "SUPERADMIN") {
      // Normal admin → must own the folder
      if (folder.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to update this folder",
        });
      }
    }

    // 4️⃣ Validate title
    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Folder title required" });
    }

    // 5️⃣ Update folder
    const updatedFolder = await prisma.imageFolder.update({
      where: { id },
      data: {
        title: title.trim(),
      },
    });

    res.json(updatedFolder);

  } catch (error) {
    console.error("UPDATE FOLDER ERROR:", error);
    res.status(500).json({ error: "Failed to update folder" });
  }
};


//GET IMAGES-FOLDER
export const getImageFolders = async (req, res) => {
  try {
    const { adminId } = req.params; // optional (for superadmin view)

    // 1️⃣ Get logged-in user
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    let targetUserId;

    // 2️⃣ Permission logic
    if (user.role === "SUPERADMIN" && adminId) {
      // SuperAdmin viewing specific admin folders
      targetUserId = adminId;
    } else {
      // Normal admin → only their own folders
      targetUserId = user.id;
    }

    const folders = await prisma.imageFolder.findMany({
      where: {
        userId: targetUserId,
      },
      include: {
        images: true, // include images inside folder
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(folders);

  } catch (error) {
    console.error("GET FOLDERS ERROR:", error);
    res.status(500).json({ error: "Failed to fetch folders" });
  }
};


//DELETE IMAGE-FOLDER
export const deleteImageFolder = async (req, res) => {
  try {
    const { id } = req.params; // folder id

    // 1️⃣ Get logged-in user
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isActive) {
      return res.status(403).json({ message: "Account is blocked" });
    }

    // 2️⃣ Find folder
    const folder = await prisma.imageFolder.findUnique({
      where: { id },
    });

    if (!folder) {
      return res.status(404).json({ message: "Folder not found" });
    }

    // 3️⃣ Permission check
    if (user.role !== "SUPERADMIN") {
      if (folder.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to delete this folder",
        });
      }
    }

    // 4️⃣ Delete folder (images auto-delete due to Cascade)
    await prisma.imageFolder.delete({
      where: { id },
    });

    res.json({ message: "Folder deleted successfully" });

  } catch (error) {
    console.error("DELETE FOLDER ERROR:", error);
    res.status(500).json({ error: "Failed to delete folder" });
  }
};




//GET IMAGES
export const getImages = async (req, res) => {
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
    const folder = await prisma.imageFolder.findUnique({
      where: { id: folderId },
    });

    if (!folder)
      return res.status(404).json({ message: "Folder not found" });

    // 3️⃣ Permission check
    if (user.role !== "SUPERADMIN") {
      if (folder.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to view images in this folder",
        });
      }
    }

    const images = await prisma.image.findMany({
      where: { folderId },
      orderBy: { createdAt: "desc" },
    });

    res.json(images);

  } catch (error) {
    console.error("GET IMAGES ERROR:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
};


//UPLOAD IMAGES
export const uploadImage = async (req, res) => {
  try {
    const { folderId } = req.params;
    // const { url, size } = req.body;/
    const file = req.file;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user)
      return res.status(401).json({ message: "User not found" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account blocked" });

    const folder = await prisma.imageFolder.findUnique({
      where: { id: folderId },
    });

    if (!folder)
      return res.status(404).json({ message: "Folder not found" });

    // Permission
    if (user.role !== "SUPERADMIN") {
      if (folder.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to add image to this folder",
        });
      }
    }

    // if (!url)
    //   return res.status(400).json({ message: "Image URL required" });

    const image = await prisma.image.create({
      data: {
        folderId,
        url: `/uploads/${file.filename}`,
        size: file.size,
      },
    });

    res.status(201).json(image);

  } catch (error) {
    console.error("CREATE IMAGE ERROR:", error);
    res.status(500).json({ error: "Failed to create image" });
  }
};

//DELETE IMAGE 
export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user)
      return res.status(401).json({ message: "User not found" });

    if (!user.isActive)
      return res.status(403).json({ message: "Account blocked" });

    const image = await prisma.image.findUnique({
      where: { id },
      include: { folder: true },
    });

    if (!image)
      return res.status(404).json({ message: "Image not found" });

    // Permission
    if (user.role !== "SUPERADMIN") {
      if (image.folder.userId !== user.id) {
        return res.status(403).json({
          message: "Not allowed to delete this image",
        });
      }
    }

    await prisma.image.delete({
      where: { id },
    });

    res.json({ message: "Image deleted successfully" });

  } catch (error) {
    console.error("DELETE IMAGE ERROR:", error);
    res.status(500).json({ error: "Failed to delete image" });
  }
};
