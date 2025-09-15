// داده‌های نمونه فیلم‌ها
const movies = [
    {
        id: 1,
        title: "پیشتازان فضا",
        description: "یک ماجراجویی فضایی حماسی با جلوه‌های ویژه خیره کننده و داستانی جذاب.",
        poster: "https://picsum.photos/seed/movie1/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        genre: "sci-fi",
        director: "احمد محمدی",
        actors: ["علی رضایی", "مریم حسینی", "رضا محمودی"],
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
        genre: "action",
        director: "محمد کریمی",
        actors: ["سارا احمدی", "امیر حسینی", "نازنین رضایی"],
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
        genre: "sci-fi",
        director: "فاطمه زاهدی",
        actors: ["حسین محمدی", "لیلا احمدی", "مهدی رضایی"],
        comments: []
    },
    {
        id: 4,
        title: "طلوع خورشید",
        description: "داستان عاشقانه‌ای که در پس‌زمینه یک روستای کوچک رخ می‌دهد.",
        poster: "https://picsum.photos/seed/movie4/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        genre: "romance",
        director: "سپیده جعفری",
        actors: ["محمد امینی", "نرگس محمدی", "امیرحسین رضایی"],
        comments: []
    },
    {
        id: 5,
        title: "شب مرموز",
        description: "یک داستان معمایی پر از حوادث غیرمنتظره و شگفت‌انگیز.",
        poster: "https://picsum.photos/seed/movie5/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        genre: "horror",
        director: "رضا احمدی",
        actors: ["سپیده حسینی", "امیر محمدی", "نازیلا رضایی"],
        comments: []
    },
    {
        id: 6,
        title: "قهرمانان",
        description: "نبرد بین خیر و شر در جهانی پر از ابرقهرمانان و شروران.",
        poster: "https://picsum.photos/seed/movie6/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        genre: "action",
        director: "امیرحسین محمدی",
        actors: ["حسین رضایی", "مریم احمدی", "علی حسینی"],
        comments: []
    },
    {
        id: 7,
        title: "راز کهن",
        description: "کشف یک راز باستانی که می‌تواند سرنوشت بشر را تغییر دهد.",
        poster: "https://picsum.photos/seed/movie7/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        genre: "fantasy",
        director: "نازنین زاهدی",
        actors: ["محمد رضایی", "سارا محمدی", "امیر حسینی"],
        comments: []
    },
    {
        id: 8,
        title: "افق جدید",
        description: "سفری به ناشناخته‌ها برای کشف افق‌های جدید دانش.",
        poster: "https://picsum.photos/seed/movie8/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        genre: "sci-fi",
        director: "حسین احمدی",
        actors: ["رضا محمدی", "نرگس رضایی", "امیرحسین حسینی"],
        comments: []
    },
    {
        id: 9,
        title: "خنده‌دارترین ماجرا",
        description: "یک کمدی مفرح با بازیگران محبوب سینما.",
        poster: "https://picsum.photos/seed/movie9/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        genre: "comedy",
        director: "پیمان جعفری",
        actors: ["سپیده محمدی", "امیر رضایی", "مریم حسینی"],
        comments: []
    },
    {
        id: 10,
        title: "اشک‌های بهشت",
        description: "داستان احساسی درباره عشق و ازخودگذشتگی.",
        poster: "https://picsum.photos/seed/movie10/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        genre: "drama",
        director: "فریبا زاهدی",
        actors: ["حسین احمدی", "نازنین محمدی", "امیرحسین رضایی"],
        comments: []
    },
    {
        id: 11,
        title: "جادوگر جنگل",
        description: "ماجراجویی در جنگلی اسرارآمیز پر از موجودات افسانه‌ای.",
        poster: "https://picsum.photos/seed/movie11/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        genre: "fantasy",
        director: "رضا محمدی",
        actors: ["سارا رضایی", "امیر حسینی", "مریم احمدی"],
        comments: []
    },
    {
        id: 12,
        title: "عشق در باران",
        description: "داستان عاشقانه‌ای که در یک شهر بارانی آغاز می‌شود.",
        poster: "https://picsum.photos/seed/movie12/300/400",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        genre: "romance",
        director: "نرگس جعفری",
        actors: ["امیرحسین محمدی", "سپیده رضایی", "حسین احمدی"],
        comments: []
    }
];

// متغیرهای global
let currentUser = null;
let currentMovieId = null;
let currentGenre = 'all';

// بررسی وضعیت ورود کاربر از localStorage
function checkLoginStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = savedUser;
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('user-greeting').textContent = `خوش آمدید، ${savedUser}`;
        renderMovies();
    }
}

// نمایش فیلم‌ها در صفحه
function renderMovies(moviesToRender = null) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';
    
    let filteredMovies = moviesToRender || movies;
    
    if (currentGenre !== 'all' && !moviesToRender) {
        filteredMovies = movies.filter(movie => movie.genre === currentGenre);
    }
    
    if (filteredMovies.length === 0) {
        moviesContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>هیچ فیلمی یافت نشد</p>
            </div>
        `;
        return;
    }
    
    filteredMovies.forEach(movie => {
        const genreText = getGenreText(movie.genre);
        
        const movieElement = document.createElement('div');
        movieElement.className = 'movie-card';
        movieElement.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <span class="movie-genre">${genreText}</span>
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

// دریافت متن فارسی برای ژانر
function getGenreText(genre) {
    const genres = {
        'all': 'همه',
        'action': 'اکشن',
        'drama': 'درام',
        'comedy': 'کمدی',
        'sci-fi': 'علمی تخیلی',
        'fantasy': 'فانتزی',
        'horror': 'ترسناک',
        'romance': 'عاشقانه'
    };
    
    return genres[genre] || genre;
}

// جستجوی فیلم‌ها
function searchMovies(query) {
    if (!query || query.trim() === '') {
        renderMovies();
        hideSuggestions();
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    
    const results = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.description.toLowerCase().includes(searchTerm) ||
        movie.genre.toLowerCase().includes(searchTerm) ||
        movie.director.toLowerCase().includes(searchTerm) ||
        movie.actors.some(actor => actor.toLowerCase().includes(searchTerm))
    );
    
    renderMovies(results);
}

// نمایش پیشنهادات جستجو
function showSuggestions(query) {
    if (!query || query.trim() === '') {
        hideSuggestions();
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const suggestions = [];
    
    // پیدا کردن پیشنهادات از عنوان فیلم‌ها
    movies.forEach(movie => {
        if (movie.title.toLowerCase().includes(searchTerm)) {
            suggestions.push(movie.title);
        }
    });
    
    // پیدا کردن پیشنهادات از نام کارگردان‌ها
    movies.forEach(movie => {
        if (movie.director.toLowerCase().includes(searchTerm) && !suggestions.includes(movie.director)) {
            suggestions.push(movie.director);
        }
    });
    
    // پیدا کردن پیشنهادات از نام بازیگران
    movies.forEach(movie => {
        movie.actors.forEach(actor => {
            if (actor.toLowerCase().includes(searchTerm) && !suggestions.includes(actor)) {
                suggestions.push(actor);
            }
        });
    });
    
    // پیدا کردن پیشنهادات از ژانرها
    const genreTexts = {
        'action': 'اکشن',
        'drama': 'درام',
        'comedy': 'کمدی',
        'sci-fi': 'علمی تخیلی',
        'fantasy': 'فانتزی',
        'horror': 'ترسناک',
        'romance': 'عاشقانه'
    };
    
    Object.entries(genreTexts).forEach(([key, value]) => {
        if (value.includes(searchTerm) && !suggestions.includes(value)) {
            suggestions.push(value);
        }
    });
    
    // نمایش پیشنهادات
    const suggestionsContainer = document.getElementById('search-suggestions');
    suggestionsContainer.innerHTML = '';
    
    if (suggestions.length > 0) {
        suggestions.slice(0, 5).forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.className = 'search-suggestion';
            suggestionElement.textContent = suggestion;
            suggestionElement.addEventListener('click', () => {
                document.getElementById('search-input').value = suggestion;
                searchMovies(suggestion);
                hideSuggestions();
            });
            suggestionsContainer.appendChild(suggestionElement);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        hideSuggestions();
    }
}

// پنهان کردن پیشنهادات جستجو
function hideSuggestions() {
    document.getElementById('search-suggestions').style.display = 'none';
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
        
        alert('نظر شما با успеیت ثبت شد.');
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
    
    // ذخیره وضعیت ورود در localStorage
    localStorage.setItem('currentUser', username);
    
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
    // حذف وضعیت ورود از localStorage
    localStorage.removeItem('currentUser');
    
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-page').style.display = 'flex';
    document.getElementById('main-content').style.display = 'none';
}

// فیلتر کردن فیلم‌ها بر اساس ژانر
function filterMoviesByGenre(genre) {
    currentGenre = genre;
    renderMovies();
    
    // به روز رسانی وضعیت فعال منو
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    
    document.querySelector(`nav ul li a[data-genre="${genre}"]`).classList.add('active');
    
    // بستن منو در حالت موبایل پس از انتخاب
    toggleMenu();
}

// toggle منو در حالت موبایل
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// مقداردهی اولیه هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
    // بررسی وضعیت ورود کاربر
    checkLoginStatus();
    
    // رویدادها
    document.getElementById('login-btn').addEventListener('click', login);
    document.getElementById('logout-btn').addEventListener('click', logout);
    document.getElementById('close-video').addEventListener('click', closeVideo);
    document.getElementById('close-comments').addEventListener('click', closeComments);
    document.getElementById('submit-comment').addEventListener('click', addComment);
    
    // رویداد منوی همبرگری
    document.getElementById('hamburger-menu').addEventListener('click', toggleMenu);
    
    // رویداد جستجو
    document.getElementById('search-btn').addEventListener('click', function() {
        const query = document.getElementById('search-input').value;
        searchMovies(query);
        hideSuggestions();
    });
    
    // رویداد جستجو با کلید Enter
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value;
            searchMovies(query);
            hideSuggestions();
        }
    });
    
    // رویدادهای پیشنهادات جستجو
    document.getElementById('search-input').addEventListener('input', function() {
        showSuggestions(this.value);
    });
    
    document.getElementById('search-input').addEventListener('blur', function() {
        setTimeout(hideSuggestions, 200);
    });
    
    document.getElementById('search-input').addEventListener('focus', function() {
        showSuggestions(this.value);
    });
    
    // رویدادهای فیلتر ژانر
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const genre = this.getAttribute('data-genre');
            filterMoviesByGenre(genre);
            document.getElementById('search-input').value = '';
            hideSuggestions();
        });
    });
    
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
    
    // بستن منو با کلیک خارج از آن
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('nav-menu');
        const hamburgerMenu = document.getElementById('hamburger-menu');
        
        if (navMenu.classList.contains('show') && 
            !navMenu.contains(e.target) && 
            !hamburgerMenu.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    });
});