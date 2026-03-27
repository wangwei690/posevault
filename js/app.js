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
    },
    {
        id: 17,
        title: "新中式国风·折扇",
        image: "https://images.pexels.com/photos/16886486/pexels-photo-16886486/free-photo-of-a-woman-in-traditional-chinese-dress.jpeg?w=600&q=80",
        tags: ["全身", "国风", "手势"],
        description: "侧身站立，手持折扇或团扇，轻轻挥动展现优雅气质。摆姿要点：身体微微侧转45°，一手持扇放于胸前或侧腰，另一手自然下垂或轻抚衣物，眼神温柔注视镜头或斜望远方",
        likes: 678,
        createdAt: Date.now() - 86400000 * 17
    },
    {
        id: 18,
        title: "汉服侧颜·发簪",
        image: "https://images.pexels.com/photos/20848330/pexels-photo-20848330/free-photo-of-a-woman-in-hanfu.jpeg?w=600&q=80",
        tags: ["面部", "汉服", "气质"],
        description: "汉服造型，侧颜出镜，发簪耳环点缀。摆姿要点：身体侧对镜头70°，下巴微收展现下颌线条，一手可轻托下巴或轻抚发簪，眼神含蓄斜视前方",
        likes: 823,
        createdAt: Date.now() - 86400000 * 18
    },
    {
        id: 19,
        title: "旗袍优雅·倚靠",
        image: "https://images.pexels.com/photos/3094835/pexels-photo-3094835.jpeg?w=600&q=80",
        tags: ["全身", "旗袍", "气质"],
        description: "一袭旗袍，优雅倚靠。摆姿要点：身体侧靠在栏杆或墙边，一手轻扶栏杆，另一手自然下垂或轻提裙摆，一条腿微屈显腰线，头部轻抬展现颈部线条，眼神自信",
        likes: 945,
        createdAt: Date.now() - 86400000 * 19
    },
    {
        id: 20,
        title: "旗袍坐姿·茶桌",
        image: "https://images.pexels.com/photos/3784414/pexels-photo-3784414.jpeg?w=600&q=80",
        tags: ["半身", "旗袍", "气质"],
        description: "旗袍坐姿，优雅品茗。摆姿要点：坐姿端正，双手轻握茶杯放于桌面，背脊挺直但不僵硬，双腿并拢斜放，微微侧身显曲线，微笑注视镜头",
        likes: 756,
        createdAt: Date.now() - 86400000 * 20
    },
    {
        id: 21,
        title: "闺蜜合影·汉服",
        image: "https://images.pexels.com/photos/13018138/pexels-photo-13018138/free-photo-of-women-in-traditional-dresses.jpeg?w=600&q=80",
        tags: ["闺蜜", "汉服", "全身"],
        description: "和闺蜜一起穿汉服合影。摆姿要点：两人可一高一低站位或并排站立，手持团扇或油纸伞互动，可手牵手或轻靠肩膀，保持适当距离显亲密",
        likes: 634,
        createdAt: Date.now() - 86400000 * 21
    },
    {
        id: 22,
        title: "情侣甜蜜·拥抱",
        image: "https://images.pexels.com/photos/2603521/pexels-photo-2603521.jpeg?w=600&q=80",
        tags: ["情侣", "全身", "甜蜜"],
        description: "情侣亲密互动。摆姿要点：男生从背后拥住女生，双手环抱腰部，女生双手可轻覆男生手背或轻扶手臂，两人同向镜头微笑，或女生侧头看男生显甜蜜",
        likes: 1023,
        createdAt: Date.now() - 86400000 * 22
    },
    {
        id: 23,
        title: "情侣对视·甜蜜",
        image: "https://images.pexels.com/photos/3868992/pexels-photo-3868992.jpeg?w=600&q=80",
        tags: ["情侣", "面部", "甜蜜"],
        description: "情侣面对面甜蜜对视。摆姿要点：两人面对面站立，距离拉近，额头轻触或鼻尖轻碰，双手轻握或相拥，眼神专注充满爱意，营造浪漫氛围",
        likes: 987,
        createdAt: Date.now() - 86400000 * 23
    },
    {
        id: 24,
        title: "丸子头甜妹·比耶",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=600&q=80",
        tags: ["面部", "甜美", "手势"],
        description: "高丸子头元气满满。摆姿要点：高扎丸子头显俏皮，歪头比耶或双手比心，笑容灿烂，可单手托腮显可爱，眼神明亮看向镜头，整体活力四射",
        likes: 1156,
        createdAt: Date.now() - 86400000 * 24
    },
    {
        id: 25,
        title: "甜妹歪头·托腮",
        image: "https://images.pexels.com/photos/3332032/pexels-photo-3332032.jpeg?w=600&q=80",
        tags: ["面部", "甜美", "手势"],
        description: "歪头托腮甜美微笑。摆姿要点：头部向一侧倾斜15-30°，一手轻托下巴，另一手自然下垂或轻扶脸颊，眼神温柔带笑，嘴角上扬显亲和力",
        likes: 1234,
        createdAt: Date.now() - 86400000 * 25
    },
    {
        id: 26,
        title: "国风撑伞·漫步",
        image: "https://images.pexels.com/photos/15892886/pexels-photo-15892886/free-photo-of-a-woman-holding-an-umbrella.jpeg?w=600&q=80",
        tags: ["全身", "国风", "道具"],
        description: "手持油纸伞古风满满。摆姿要点：一手握住伞柄放于肩侧，伞面微微倾斜营造氛围，另一手可轻提裙摆或自然摆动，步伐轻盈，眼神可望向远处或回眸一笑",
        likes: 892,
        createdAt: Date.now() - 86400000 * 26
    },
    {
        id: 27,
        title: "古风回眸·浅笑",
        image: "https://images.pexels.com/photos/14208323/pexels-photo-14208323.jpeg?w=600&q=80",
        tags: ["面部", "国风", "气质"],
        description: "回眸一笑百媚生。摆姿要点：身体前进一步再回头，转身角度120-150°，头部自然跟随身体转动，一手轻提裙摆或轻抚发丝，眼神含蓄微笑",
        likes: 765,
        createdAt: Date.now() - 86400000 * 27
    },
    {
        id: 28,
        title: "楼梯俯拍·大长腿",
        image: "https://images.pexels.com/photos/3764645/pexels-photo-3764645.jpeg?w=600&q=80",
        tags: ["全身", "楼梯", "高级感"],
        description: "坐在楼梯上显腿长。摆姿要点：坐在楼梯边缘，双腿自然向下延伸，可并拢或一高一低显层次，一手支撑身体，另一手可轻扶楼梯栏杆，抬头看镜头",
        likes: 876,
        createdAt: Date.now() - 86400000 * 28
    },
    {
        id: 29,
        title: "对镜自拍·OOTD",
        image: "https://images.pexels.com/photos/4225205/pexels-photo-4225205.jpeg?w=600&q=80",
        tags: ["全身", "自拍", "日常"],
        description: "对镜自拍展示穿搭。摆姿要点：手机置于镜子上方或侧方，全身入镜，可摆姿势如叉腰、比耶或整理衣物，保持距离避免遮挡，表情自然放松",
        likes: 1345,
        createdAt: Date.now() - 86400000 * 29
    },
    {
        id: 30,
        title: "探店打卡·手持饮品",
        image: "https://images.pexels.com/photos/3056655/pexels-photo-3056655.jpeg?w=600&q=80",
        tags: ["全身", "探店", "日常"],
        description: "咖啡店手持饮品出镜。摆姿要点：一手持咖啡杯或饮品放于胸前，另一手自然下垂或轻扶物品，可侧身45°或正对镜头，表情轻松享受氛围",
        likes: 923,
        createdAt: Date.now() - 86400000 * 30
    },
    {
        id: 31,
        title: "宿舍闺蜜·躺卧",
        image: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?w=600&q=80",
        tags: ["闺蜜", "全身", "日常"],
        description: "宿舍内闺蜜躺卧互动。摆姿要点：躺在床上或沙发上，可头靠肩膀或相互依偎，可玩手机或看向镜头，表情轻松自然，营造温馨氛围",
        likes: 567,
        createdAt: Date.now() - 86400000 * 31
    },
    {
        id: 32,
        title: "氛围感侧躺·沙发",
        image: "https://images.pexels.com/photos/3755707/pexels-photo-3755707.jpeg?w=600&q=80",
        tags: ["全身", "氛围感", "室内"],
        description: "侧躺慵懒高级感。摆姿要点：侧躺在沙发或床上，一手托腮或玩弄头发，身体自然舒展，双腿可微屈显曲线，眼神可看镜头或望向远处，营造慵懒氛围",
        likes: 789,
        createdAt: Date.now() - 86400000 * 32
    },
    {
        id: 33,
        title: "低头浅笑·含蓄",
        image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?w=600&q=80",
        tags: ["面部", "半身", "气质"],
        description: "微微低头含蓄微笑。摆姿要点：头部微微向下倾斜30°，下巴轻收，眼神斜向下方或望向远方，嘴角含蓄上扬，一手可轻抚头发或自然下垂",
        likes: 645,
        createdAt: Date.now() - 86400000 * 33
    },
    {
        id: 34,
        title: "元气比耶·活泼",
        image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?w=600&q=80",
        tags: ["手势", "全身", "活泼"],
        description: "双手比耶元气满满。摆姿要点：双手举起比耶，手臂自然弯曲不过于僵硬，笑容灿烂，可歪头增加俏皮感，身体姿态轻松活泼，整体充满活力",
        likes: 1089,
        createdAt: Date.now() - 86400000 * 34
    },
    {
        id: 35,
        title: "OOTD站立·自然",
        image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?w=600&q=80",
        tags: ["全身", "穿搭", "日常"],
        description: "自然站立展示穿搭。摆姿要点：身体正对镜头或微侧，双手可自然下垂、叉腰或插袋，一腿微屈显线条，背脊挺直但放松，表情自然自信",
        likes: 567,
        createdAt: Date.now() - 86400000 * 35
    },
    {
        id: 36,
        title: "旗袍优雅·栏杆",
        image: "https://images.pexels.com/photos/2803231/pexels-photo-2803231.jpeg?w=600&q=80",
        tags: ["全身", "旗袍", "气质"],
        description: "旗袍倚靠栏杆优雅。摆姿要点：身体轻靠栏杆，一手扶栏另一手自然下垂，双腿并拢或交叉，头部微抬显颈部线条，眼神自信望向镜头",
        likes: 834,
        createdAt: Date.now() - 86400000 * 36
    },
    {
        id: 37,
        title: "汉服飘逸·转身",
        image: "https://images.pexels.com/photos/1460980/pexels-photo-1460980.jpeg?w=600&q=80",
        tags: ["全身", "汉服", "国风"],
        description: "汉服转身飘逸动感。摆姿要点：身体在行走中转身，裙摆随动作飘逸，一手轻提裙摆或向外伸展，另一手自然摆动，眼神可回望镜头或望向远方",
        likes: 723,
        createdAt: Date.now() - 86400000 * 37
    },
    {
        id: 38,
        title: "甜妹手心·托腮",
        image: "https://images.pexels.com/photos/1851162/pexels-photo-1851162.jpeg?w=600&q=80",
        tags: ["面部", "甜美", "手势"],
        description: "双手托腮甜美可人。摆姿要点：双手手心向上托住下巴，手肘轻放在桌面或膝盖上，头部微倾，眼神明亮带笑，整体显可爱俏皮",
        likes: 956,
        createdAt: Date.now() - 86400000 * 38
    },
    {
        id: 39,
        title: "情侣互动·比心",
        image: "https://images.pexels.com/photos/2629789/pexels-photo-2629789.jpeg?w=600&q=80",
        tags: ["情侣", "手势", "甜蜜"],
        description: "情侣一起比心互动。摆姿要点：两人面对面或并排站立，双手一起比心手势，可一人比大心另一人比小心，或两人各比一半心，表情甜蜜微笑",
        likes: 1123,
        createdAt: Date.now() - 86400000 * 39
    },
    {
        id: 40,
        title: "闺蜜互动·手牵手",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600&q=80",
        tags: ["闺蜜", "全身", "日常"],
        description: "闺蜜手牵手亲密互动。摆姿要点：两人手牵手并肩站立或一前一后，可一起看向镜头或互动交谈，表情自然温馨，距离保持适当显亲密",
        likes: 678,
        createdAt: Date.now() - 86400000 * 40
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
    initScrollAnimation();
});

// Scroll Animation - Intersection Observer
function initScrollAnimation() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    setTimeout(() => {
        document.querySelectorAll('.pose-card, .daily-card, .section-title').forEach(el => {
            el.classList.add('scroll-animate');
            observer.observe(el);
        });
    }, 100);
}

// Re-init scroll animation after content changes
function refreshScrollAnimation() {
    setTimeout(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    }, 100);
}

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

// Mobile Search
function handleMobileSearch(value) {
    currentSearch = value;
    navigate('home');
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
        closeShareModal();
    }
});

// Share Functions
let currentSharePose = null;

function sharePose(type) {
    const lightbox = document.getElementById('lightbox');
    const title = document.getElementById('lightboxTitle').textContent;
    const image = document.getElementById('lightboxImage').src;
    const tags = document.getElementById('lightboxTags').innerHTML;
    const desc = document.getElementById('lightboxDesc').textContent;

    currentSharePose = { title, image, tags, desc };

    if (type === 'link') {
        shareLink();
    } else if (type === 'poster') {
        sharePoster();
    }
}

function shareLink() {
    const { title } = currentSharePose;
    const shareUrl = `${window.location.origin}${window.location.pathname}?pose=${encodeURIComponent(title)}`;

    const modal = document.getElementById('shareModal');
    const modalTitle = document.getElementById('shareModalTitle');
    const modalContent = document.getElementById('shareModalContent');

    modalTitle.textContent = '分享链接';
    modalContent.innerHTML = `
        <div class="share-link-box">
            <input type="text" class="share-link-input" value="${shareUrl}" readonly id="shareLinkInput">
            <button class="copy-btn" onclick="copyShareLink()">复制</button>
        </div>
        <p style="color: var(--text-secondary); font-size: 0.875rem; text-align: center;">复制链接后分享给朋友</p>
    `;

    modal.classList.add('active');
}

function copyShareLink() {
    const input = document.getElementById('shareLinkInput');
    input.select();
    document.execCommand('copy');
    showToast('链接已复制到剪贴板', 'success');
}

async function sharePoster() {
    const { title, image, desc } = currentSharePose;

    // Show loading
    const modal = document.getElementById('shareModal');
    const modalTitle = document.getElementById('shareModalTitle');
    const modalContent = document.getElementById('shareModalContent');

    modalTitle.textContent = '生成海报';
    modalContent.innerHTML = '<p style="text-align: center;">海报生成中...</p>';
    modal.classList.add('active');

    try {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas size (9:16 ratio for stories)
        canvas.width = 540;
        canvas.height = 960;

        // Draw background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#0f0f1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add decorative elements
        ctx.fillStyle = 'rgba(233, 69, 96, 0.1)';
        ctx.beginPath();
        ctx.arc(100, 100, 150, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 107, 107, 0.08)';
        ctx.beginPath();
        ctx.arc(450, 800, 200, 0, Math.PI * 2);
        ctx.fill();

        // Load and draw image
        const img = new Image();
        img.crossOrigin = 'anonymous';

        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = image;
        });

        // Draw image (centered, with padding)
        const imgPadding = 40;
        const imgWidth = canvas.width - imgPadding * 2;
        const imgHeight = imgWidth * 0.75;
        const imgY = 120;

        // Draw image with rounded corners
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(imgPadding, imgY, imgWidth, imgHeight, 16);
        ctx.clip();
        ctx.drawImage(img, imgPadding, imgY, imgWidth, imgHeight);
        ctx.restore();

        // Draw title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px "Playfair Display", serif';
        ctx.textAlign = 'center';
        ctx.fillText(title, canvas.width / 2, imgY + imgHeight + 60);

        // Draw description
        ctx.fillStyle = '#a0a0b8';
        ctx.font = '18px "DM Sans", sans-serif';

        // Wrap description text
        const maxWidth = canvas.width - 80;
        const words = desc.split('');
        let line = '';
        let lineY = imgY + imgHeight + 110;

        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i];
            const metrics = ctx.measureText(testLine);
            if (metrics.width > maxWidth && i > 0) {
                ctx.fillText(line, canvas.width / 2, lineY);
                line = words[i];
                lineY += 28;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, canvas.width / 2, lineY);

        // Draw watermark
        ctx.fillStyle = '#e94560';
        ctx.font = 'bold 20px "DM Sans", sans-serif';
        ctx.fillText('PoseVault', canvas.width / 2, canvas.height - 60);

        // Draw URL
        ctx.fillStyle = '#666';
        ctx.font = '14px "DM Sans", sans-serif';
        ctx.fillText('posevault.github.io', canvas.width / 2, canvas.height - 30);

        // Display canvas
        modalContent.innerHTML = `
            <div class="share-poster-preview">
                <img src="${canvas.toDataURL('image/png')}" alt="分享海报">
                <button class="btn btn-primary" onclick="downloadPoster()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    下载海报
                </button>
            </div>
        `;
    } catch (error) {
        console.error('Error generating poster:', error);
        modalContent.innerHTML = `
            <p style="text-align: center; color: #f44336;">
                海报生成失败，请尝试分享链接
            </p>
            <button class="btn btn-primary" onclick="shareLink()" style="margin-top: 1rem;">
                改为分享链接
            </button>
        `;
    }
}

function downloadPoster() {
    const img = document.querySelector('.share-poster-preview img');
    if (!img) return;

    const link = document.createElement('a');
    link.download = `posevault-${Date.now()}.png`;
    link.href = img.src;
    link.click();

    showToast('海报已下载', 'success');
}

function closeShareModal() {
    document.getElementById('shareModal').classList.remove('active');
}
