// ========================================
// PoseVault - 拍照姿势库 JavaScript
// ========================================

// Default poses data (sample data)
const defaultPoses = [
    {
        id: 1,
        title: "回眸浅笑",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
        tags: ["面部", "半身"],
        description: "轻轻回头，露出甜美微笑，自然又动人",
        likes: 128,
        createdAt: Date.now() - 86400000 * 3
    },
    {
        id: 2,
        title: "双手比心",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
        tags: ["手势", "全身"],
        description: "双手放在胸前比心，少女感十足",
        likes: 256,
        createdAt: Date.now() - 86400000 * 2
    },
    {
        id: 3,
        title: "侧身站立",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
        tags: ["全身", "单人"],
        description: "侧身站立，一条腿微曲，简约高级",
        likes: 189,
        createdAt: Date.now() - 86400000 * 1
    },
    {
        id: 4,
        title: "闺蜜背影",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
        tags: ["闺蜜", "全身"],
        description: "和闺蜜一起背对镜头，默契十足",
        likes: 312,
        createdAt: Date.now() - 86400000 * 5
    },
    {
        id: 5,
        title: "男友视角",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
        tags: ["面部", "半身"],
        description: "假装不经意看镜头，营造男友视角感",
        likes: 445,
        createdAt: Date.now() - 86400000 * 4
    },
    {
        id: 6,
        title: "情侣牵手",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80",
        tags: ["情侣", "全身"],
        description: "十指紧扣，画面甜蜜温馨",
        likes: 523,
        createdAt: Date.now() - 86400000 * 6
    },
    {
        id: 7,
        title: "侧颜杀手",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        tags: ["面部", "半身"],
        description: "完美的侧颜线条，优雅又高级",
        likes: 378,
        createdAt: Date.now() - 86400000 * 7
    },
    {
        id: 8,
        title: "ootd站姿",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
        tags: ["全身", "单人"],
        description: "自然站立展示今日穿搭，简约大方",
        likes: 267,
        createdAt: Date.now() - 86400000 * 8
    },
    {
        id: 9,
        title: "挡脸可爱",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
        tags: ["手势", "面部"],
        description: "用手指挡住半张脸，俏皮可爱",
        likes: 198,
        createdAt: Date.now() - 86400000 * 9
    },
    {
        id: 10,
        title: "万能坐姿",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
        tags: ["全身", "单人"],
        description: "席地而坐，双腿自然放松",
        likes: 342,
        createdAt: Date.now() - 86400000 * 10
    },
    {
        id: 11,
        title: "对镜自拍",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
        tags: ["全身", "单人"],
        description: "对镜自拍，展示穿搭或妆容",
        likes: 289,
        createdAt: Date.now() - 86400000 * 11
    },
    {
        id: 12,
        title: "低头浅笑",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
        tags: ["面部", "半身"],
        description: "微微低头，笑容含蓄优雅",
        likes: 156,
        createdAt: Date.now() - 86400000 * 12
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
