// ========================================
// PoseVault - 拍照姿势库 JavaScript
// ========================================

// Default poses data (sample data) - 适合中国人的拍照姿势
const defaultPoses = [
    {
        id: 1,
        title: "新中式国风",
        image: "https://images.pexels.com/photos/16886486/pexels-photo-16886486/free-photo-of-a-woman-in-traditional-chinese-dress.jpeg?w=600&q=80",
        tags: ["全身", "国风"],
        description: "身穿新中式服装，侧身站立，手持折扇或团扇，温婉优雅",
        likes: 528,
        createdAt: Date.now() - 86400000 * 1
    },
    {
        id: 2,
        title: "汉服侧颜",
        image: "https://images.pexels.com/photos/20848330/pexels-photo-20848330/free-photo-of-a-woman-in-hanfu.jpeg?w=600&q=80",
        tags: ["面部", "国风", "汉服"],
        description: "汉服造型，侧颜出镜，发簪耳环点缀，古典韵味十足",
        likes: 456,
        createdAt: Date.now() - 86400000 * 2
    },
    {
        id: 3,
        title: "闺蜜汉服",
        image: "https://images.pexels.com/photos/13018138/pexels-photo-13018138/free-photo-of-women-in-traditional-dresses.jpeg?w=600&q=80",
        tags: ["闺蜜", "国风", "全身"],
        description: "和闺蜜一起穿汉服，手执团扇或油纸伞，古风满满",
        likes: 389,
        createdAt: Date.now() - 86400000 * 3
    },
    {
        id: 4,
        title: "旗袍气质",
        image: "https://images.pexels.com/photos/3094835/pexels-photo-3094835.jpeg?w=600&q=80",
        tags: ["全身", "旗袍", "气质"],
        description: "一袭旗袍，侧身站立或坐姿，展现东方女性韵味",
        likes: 612,
        createdAt: Date.now() - 86400000 * 4
    },
    {
        id: 5,
        title: "丸子头甜妹",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=600&q=80",
        tags: ["面部", "甜美", "半身"],
        description: "高丸子头，元气满满，歪头比耶，活泼可爱",
        likes: 723,
        createdAt: Date.now() - 86400000 * 5
    },
    {
        id: 6,
        title: "古风撑伞",
        image: "https://images.pexels.com/photos/15892886/pexels-photo-15892886/free-photo-of-a-woman-holding-an-umbrella.jpeg?w=600&q=80",
        tags: ["全身", "国风", "道具"],
        description: "手持油纸伞，身穿汉服或新中式，氛围感拉满",
        likes: 445,
        createdAt: Date.now() - 86400000 * 6
    },
    {
        id: 7,
        title: "氛围感侧躺",
        image: "https://images.pexels.com/photos/3755707/pexels-photo-3755707.jpeg?w=600&q=80",
        tags: ["全身", "氛围感", "室内"],
        description: "侧躺在沙发或床上，手托腮或玩头发，慵懒又高级",
        likes: 567,
        createdAt: Date.now() - 86400000 * 7
    },
    {
        id: 8,
        title: "对镜自拍",
        image: "https://images.pexels.com/photos/4225205/pexels-photo-4225205.jpeg?w=600&q=80",
        tags: ["全身", "自拍", "日常"],
        description: "对镜自拍，展示今日穿搭或妆容，自然又真实",
        likes: 834,
        createdAt: Date.now() - 86400000 * 8
    },
    {
        id: 9,
        title: "楼梯俯拍",
        image: "https://images.pexels.com/photos/3764645/pexels-photo-3764645.jpeg?w=600&q=80",
        tags: ["全身", "楼梯", "高级感"],
        description: "坐在楼梯上从上往下拍，显瘦又显腿长，秒变大长腿",
        likes: 678,
        createdAt: Date.now() - 86400000 * 9
    },
    {
        id: 10,
        title: "手托腮微笑",
        image: "https://images.pexels.com/photos/3332032/pexels-photo-3332032.jpeg?w=600&q=80",
        tags: ["面部", "半身", "手势"],
        description: "单手托腮，歪头微笑，最经典的甜妹姿势",
        likes: 892,
        createdAt: Date.now() - 86400000 * 10
    },
    {
        id: 11,
        title: "情侣互动",
        image: "https://images.pexels.com/photos/2603521/pexels-photo-2603521.jpeg?w=600&q=80",
        tags: ["情侣", "全身", "甜蜜"],
        description: "男生从背后拥住女生，或一起比心，甜蜜满分",
        likes: 756,
        createdAt: Date.now() - 86400000 * 11
    },
    {
        id: 12,
        title: "宿舍闺蜜照",
        image: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?w=600&q=80",
        tags: ["闺蜜", "全身", "日常"],
        description: "在宿舍或房间内互动，躺在床上或坐着聊天，轻松自然",
        likes: 423,
        createdAt: Date.now() - 86400000 * 12
    },
    {
        id: 13,
        title: "低头浅笑",
        image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?w=600&q=80",
        tags: ["面部", "半身", "气质"],
        description: "微微低头，露出腼腆微笑，温柔又含蓄",
        likes: 534,
        createdAt: Date.now() - 86400000 * 13
    },
    {
        id: 14,
        title: "探店打卡",
        image: "https://images.pexels.com/photos/3056655/pexels-photo-3056655.jpeg?w=600&q=80",
        tags: ["全身", "探店", "日常"],
        description: "在咖啡店或网红店手持饮品出镜，氛围感满满",
        likes: 645,
        createdAt: Date.now() - 86400000 * 14
    },
    {
        id: 15,
        title: "比耶元气",
        image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?w=600&q=80",
        tags: ["手势", "全身", "活泼"],
        description: "双手比耶或单手比耶，元气满满的笑容",
        likes: 987,
        createdAt: Date.now() - 86400000 * 15
    },
    {
        id: 16,
        title: "ootd站立",
        image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?w=600&q=80",
        tags: ["全身", "穿搭", "日常"],
        description: "自然站立展示今日穿搭，一只手可以叉腰或放在口袋",
        likes: 456,
        createdAt: Date.now() - 86400000 * 16
    }
];

// State
let poses = [];
let favorites = [];
let currentCategory = 'all';
let currentSearch = '';
let uploadedImage = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderHome();
    setupUploadArea();
});

// Data Management
function loadData() {
    const savedPoses = localStorage.getItem('posevault_poses');
    const savedFavorites = localStorage.getItem('posevault_favorites');
    
    if (savedPoses) {
        poses = JSON.parse(savedPoses);
    } else {
        poses = [...defaultPoses];
        savePoses();
    }
    
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
}

function savePoses() {
    localStorage.setItem('posevault_poses', JSON.stringify(poses));
}

function saveFavorites() {
    localStorage.setItem('posevault_favorites', JSON.stringify(favorites));
}

// Navigation
function navigate(page) {
    // Update nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // Update pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}Page`).classList.add('active');
    
    // Close mobile menu
    document.getElementById('mobileMenu').classList.remove('active');
    
    // Render page content
    switch(page) {
        case 'home':
            renderHome();
            break;
        case 'favorites':
            renderFavorites();
            break;
        case 'recommend':
            renderRecommend();
            break;
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

// Home Page
function renderHome() {
    const filteredPoses = filterPoses();
    const grid = document.getElementById('poseGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (filteredPoses.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        emptyState.style.display = 'none';
        grid.innerHTML = filteredPoses.map((pose, index) => createPoseCard(pose, index)).join('');
    }
}

function filterPoses() {
    return poses.filter(pose => {
        const matchesCategory = currentCategory === 'all' || pose.tags.includes(currentCategory);
        const matchesSearch = !currentSearch || 
            pose.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            pose.tags.some(tag => tag.toLowerCase().includes(currentSearch.toLowerCase()));
        return matchesCategory && matchesSearch;
    }).sort((a, b) => b.likes - a.likes);
}

function createPoseCard(pose, index) {
    const isFavorited = favorites.includes(pose.id);
    return `
        <div class="pose-card" style="animation-delay: ${index * 0.05}s" onclick="openLightbox(${pose.id})">
            <div class="pose-image-wrapper">
                <img class="pose-image" src="${pose.image}" alt="${pose.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/600x400/1a1a2e/e94560?text=PoseVault'">
                <button class="pose-favorite ${isFavorited ? 'favorited' : ''}" onclick="event.stopPropagation(); toggleFavorite(${pose.id})">
                    <svg viewBox="0 0 24 24" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
            </div>
            <div class="pose-content">
                <h3 class="pose-title">${pose.title}</h3>
                <div class="pose-tags">
                    ${pose.tags.map(tag => `<span class="pose-tag">${tag}</span>`).join('')}
                </div>
                <div class="pose-meta">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    ${pose.likes}
                </div>
            </div>
        </div>
    `;
}

function filterCategory(category) {
    currentCategory = category;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderHome();
}

function filterByTag(tag) {
    currentCategory = tag === 'all' ? 'all' : tag;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        }
    });
    
    renderHome();
}

function handleSearch(value) {
    currentSearch = value;
    renderHome();
}

// Favorites
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('已取消收藏', 'success');
    } else {
        favorites.push(id);
        showToast('收藏成功', 'success');
    }
    
    saveFavorites();
    
    // Re-render current page
    if (document.getElementById('favoritesPage').classList.contains('active')) {
        renderFavorites();
    } else if (document.getElementById('homePage').classList.contains('active')) {
        renderHome();
    } else if (document.getElementById('recommendPage').classList.contains('active')) {
        renderRecommend();
    }
}

function renderFavorites() {
    const favoritePoses = poses.filter(p => favorites.includes(p.id));
    const grid = document.getElementById('favoritesGrid');
    const emptyState = document.getElementById('favoritesEmpty');
    
    if (favoritePoses.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        emptyState.style.display = 'none';
        grid.innerHTML = favoritePoses.map((pose, index) => createPoseCard(pose, index)).join('');
    }
}

// Recommend
function renderRecommend() {
    // Daily pick
    const dailyCard = document.getElementById('dailyCard');
    const dailyPose = getDailyPick();
    
    if (dailyPose) {
        dailyCard.innerHTML = `
            <div class="daily-image">
                <img src="${dailyPose.image}" alt="${dailyPose.title}" onerror="this.src='https://via.placeholder.com/600x400/1a1a2e/e94560?text=PoseVault'">
            </div>
            <div class="daily-info">
                <span class="daily-label">今日精选</span>
                <h3 class="daily-title">${dailyPose.title}</h3>
                <p class="daily-desc">${dailyPose.description}</p>
                <div class="daily-tags">
                    ${dailyPose.tags.map(tag => `<span class="pose-tag">${tag}</span>`).join('')}
                </div>
                <button class="btn btn-primary" style="margin-top: 1.5rem; width: fit-content;" onclick="toggleFavorite(${dailyPose.id})">
                    ${favorites.includes(dailyPose.id) ? '已收藏' : '收藏此姿势'}
                </button>
            </div>
        `;
    }
    
    // Popular poses
    const popularGrid = document.getElementById('popularGrid');
    const popularPoses = [...poses].sort((a, b) => b.likes - a.likes).slice(0, 4);
    popularGrid.innerHTML = popularPoses.map((pose, index) => createPoseCard(pose, index)).join('');
    
    // For you (random)
    const foryouGrid = document.getElementById('foryouGrid');
    const foryouPoses = getRandomPoses(4);
    foryouGrid.innerHTML = foryouPoses.map((pose, index) => createPoseCard(pose, index)).join('');
}

function getDailyPick() {
    const today = new Date().toDateString();
    const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = seed % poses.length;
    return poses[index];
}

function getRandomPoses(count) {
    const shuffled = [...poses].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Upload
function setupUploadArea() {
    const uploadArea = document.getElementById('uploadArea');
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        handleFile(file);
    }
}

function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        showToast('请选择图片文件', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedImage = e.target.result;
        showPreview(uploadedImage);
    };
    reader.readAsDataURL(file);
}

function showPreview(src) {
    document.getElementById('uploadPlaceholder').style.display = 'none';
    document.getElementById('uploadPreview').style.display = 'block';
    document.getElementById('previewImage').src = src;
}

function removePreview(event) {
    event.stopPropagation();
    uploadedImage = null;
    document.getElementById('uploadPlaceholder').style.display = 'block';
    document.getElementById('uploadPreview').style.display = 'none';
    document.getElementById('previewImage').src = '';
    document.getElementById('fileInput').value = '';
}

function handleUpload(event) {
    event.preventDefault();
    
    const title = document.getElementById('poseTitle').value.trim();
    const description = document.getElementById('poseDescription').value.trim();
    const checkboxes = document.querySelectorAll('input[name="tags"]:checked');
    const tags = Array.from(checkboxes).map(cb => cb.value);
    
    if (!uploadedImage) {
        showToast('请上传图片', 'error');
        return;
    }
    
    if (!title) {
        showToast('请输入标题', 'error');
        return;
    }
    
    if (tags.length === 0) {
        showToast('请选择至少一个标签', 'error');
        return;
    }
    
    // Create new pose
    const newPose = {
        id: Date.now(),
        title,
        image: uploadedImage,
        tags,
        description,
        likes: 0,
        createdAt: Date.now()
    };
    
    // Add to poses
    poses.unshift(newPose);
    savePoses();
    
    // Show success message
    showToast('发布成功！', 'success');
    
    // Reset form
    document.getElementById('uploadForm').reset();
    removePreview({ stopPropagation: () => {} });
    
    // Navigate to home
    navigate('home');
}

// Lightbox
function openLightbox(id) {
    const pose = poses.find(p => p.id === id);
    if (!pose) return;
    
    const lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxImage').src = pose.image;
    document.getElementById('lightboxTitle').textContent = pose.title;
    document.getElementById('lightboxDesc').textContent = pose.description || '暂无描述';
    document.getElementById('lightboxTags').innerHTML = pose.tags.map(tag => `<span class="pose-tag">${tag}</span>`).join('');
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Toast
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.className = `toast ${type} show`;
    toast.querySelector('.toast-message').textContent = message;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        document.getElementById('mobileMenu').classList.remove('active');
    }
});
