// داده‌های نمونه فیلم‌ها
const movies = [
    {
        id: 1,
        title: "پیشتازان فضا",
        description: "یک ماجراجویی فضایی حماسی با جلوه‌های ویژه خیره کننده و داستانی جذاب.",
        poster: "https://picsum.photos/seed/movie1/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        comments: [
            { author: "علی محمدی", text: "فیلم بسیار جذابی بود. بازی بازیگران فوق‌العاده بود.", date: "۱۴۰۲/۰۵/۱۰" },
            { author: "مریم رضایی", text: "من این فیلم رو دوست داشتم. داستان گیرا و جذابی داشت.", date: "۱۴۰۲/۰۵/۰۸" }
        ]
    },
    {
        id: 2,
        title: "شهر گمشده",
        description: "کاوش یک شهر باستانی پر از رمز و راز و خطرات غیرمنتظره.",
        poster: "https://picsum.photos/seed/movie2/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        comments: [
            { author: "رضا حسینی", text: "جلوه‌های ویژه فیلم واقعا حیرت‌انگیز بودند.", date: "۱۴۰۲/۰۵/۰۵" }
        ]
    },
    {
        id: 3,
        title: "راه ستاره",
        description: "سفری بین کهکشانی به دنبال منشأ حیات در جهان.",
        poster: "https://picsum.photos/seed/movie3/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        comments: []
    },
    {
        id: 4,
        title: "طلوع خورشید",
        description: "داستان عاشقانه‌ای که در پس‌زمینه یک روستای کوچک رخ می‌دهد.",
        poster: "https://picsum.photos/seed/movie4/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        comments: []
    },
    {
        id: 5,
        title: "شب مرموز",
        description: "یک داستان معمایی پر از حوادث غیرمنتظره و شگفت‌انگیز.",
        poster: "https://picsum.photos/seed/movie5/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        comments: []
    },
    {
        id: 6,
        title: "قهرمانان",
        description: "نبرد بین خیر و شر در جهانی پر از ابرقهرمانان و شروران.",
        poster: "https://picsum.photos/seed/movie6/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        comments: []
    },
    {
        id: 7,
        title: "راز کهن",
        description: "کشف یک راز باستانی که می‌تواند سرنوشت بشر را تغییر دهد.",
        poster: "https://picsum.photos/seed/movie7/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        comments: []
    },
    {
        id: 8,
        title: "افق جدید",
        description: "سفری به ناشناخته‌ها برای کشف افق‌های جدید دانش.",
        poster: "https://picsum.photos/seed/movie8/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        comments: []
    }
];

// متغیرهای global
let currentUser = null;
let currentMovieId = null;

// نمایش فیلم‌ها در صفحه
function renderMovies() {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';
    
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie-card';
        movieElement.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-description">${movie.description}</p>
                <div class="movie-actions">
                    <button class="btn btn-watch" onclick="watchMovie(${movie.id})">
                        <i class="fas fa-play"></i> تماشا
                    </button>
                    <button class="btn btn-download" onclick="downloadMovie(${movie.id})">
                        <i class="fas fa-download"></i> دانلود
                    </button>
                    <button class="btn btn-comments" onclick="showComments(${movie.id})">
                        <i class="fas fa-comments"></i> نظرات
                    </button>
                </div>
            </div>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

// نمایش نظرات یک فیلم خاص
function renderComments(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';
    
    document.getElementById('comments-movie-title').textContent = `نظرات فیلم: ${movie.title}`;
    
    if (movie.comments.length === 0) {
        commentsList.innerHTML = '<p>هنوز نظری برای این فیلم ثبت نشده است.</p>';
        return;
    }
    
    movie.comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
        `;
        commentsList.appendChild(commentElement);
    });
}

// تماشای فیلم
function watchMovie(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        const videoPlayer = document.getElementById('video-player');
        const videoTitle = document.getElementById('video-title');
        const movieVideo = document.getElementById('movie-video');
        
        videoTitle.textContent = movie.title;
        movieVideo.src = movie.video;
        videoPlayer.style.display = 'flex';
        
        // وقتی ویدئو تمام شد، پخش کننده بسته شود
        movieVideo.onended = function() {
            closeVideo();
        };
        
        // ویدئو را از ابتدا پخش کن
        movieVideo.currentTime = 0;
        movieVideo.play();
    }
}

// بستن پخش کننده ویدئو
function closeVideo() {
    const videoPlayer = document.getElementById('video-player');
    const movieVideo = document.getElementById('movie-video');
    
    movieVideo.pause();
    videoPlayer.style.display = 'none';
}

// دانلود فیلم (نمایشی)
function downloadMovie(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        alert(`در حال دانلود فیلم: ${movie.title}`);
        // در یک پیاده‌سازی واقعی، اینجا کاربر به صفحه دانلود هدایت می‌شد
    }
}

// نمایش نظرات یک فیلم
function showComments(movieId) {
    currentMovieId = movieId;
    const commentsModal = document.getElementById('comments-modal');
    commentsModal.style.display = 'flex';
    renderComments(movieId);
}

// بستن modal نظرات
function closeComments() {
    const commentsModal = document.getElementById('comments-modal');
    commentsModal.style.display = 'none';
    document.getElementById('comment-text').value = '';
}

// افزودن نظر جدید برای فیلم
function addComment() {
    if (!currentUser) {
        alert('لطفاً ابتدا وارد حساب کاربری خود شوید.');
        return;
    }
    
    const commentText = document.getElementById('comment-text').value.trim();
    if (!commentText) {
        alert('لطفاً متن نظر خود را وارد کنید.');
        return;
    }
    
    const movie = movies.find(m => m.id === currentMovieId);
    if (movie) {
        const newComment = {
            author: currentUser,
            text: commentText,
            date: new Date().toLocaleDateString('fa-IR')
        };
        
        movie.comments.unshift(newComment);
        renderComments(currentMovieId);
        document.getElementById('comment-text').value = '';
        
        alert('نظر شما با موفقیت ثبت شد.');
    }
}

// مدیریت فرآیند لاگین
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !password) {
        alert('لطفاً نام کاربری و رمز عبور خود را وارد کنید.');
        return;
    }
    
    // در یک پیاده‌سازی واقعی، اینجا اعتبارسنجی انجام می‌شود
    currentUser = username;
    
    // نمایش محتوای اصلی و مخفی کردن صفحه لاگین
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('user-greeting').textContent = `خوش آمدید، ${username}`;
    
    // رندر کردن فیلم‌ها
    renderMovies();
}

// مدیریت خروج کاربر
function logout() {
    currentUser = null;
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('main-content').style.display = 'none';
}

// مقداردهی اولیه هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
    // رویدادها
    document.getElementById('login-btn').addEventListener('click', login);
    document.getElementById('logout-btn').addEventListener('click', logout);
    document.getElementById('close-video').addEventListener('click', closeVideo);
    document.getElementById('close-comments').addEventListener('click', closeComments);
    document.getElementById('submit-comment').addEventListener('click', addComment);
    
    // بستن ویدئو با کلیک خارج از آن
    document.getElementById('video-player').addEventListener('click', function(e) {
        if (e.target === this) {
            closeVideo();
        }
    });
    
    // بستن نظرات با کلیک خارج از آن
    document.getElementById('comments-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeComments();
        }
    });
    
    // امکان ورود با دکمه Enter
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
});