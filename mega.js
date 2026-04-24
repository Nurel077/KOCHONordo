(() => {
    const STORAGE = {
        users: "kochmon_ordo_users_v2",
        session: "kochmon_ordo_session_v2",
        settings: "kochmon_ordo_settings_v2",
    };

    const ui = {
        loginBtn: document.getElementById("loginBtn"),
        playBtn: document.getElementById("playBtn"),
        profileBtn: document.getElementById("profileBtn"),
        userMenuBtn: document.getElementById("userMenuBtn"),
        userMenu: document.getElementById("userMenu"),
        userName: document.getElementById("userName"),
        userEmail: document.getElementById("userEmail"),
        logoutBtn: document.getElementById("logoutBtn"),
        deleteAccountMenuBtn: document.getElementById("deleteAccountMenuBtn"),
        authForms: document.getElementById("authForms"),
        loginTab: document.getElementById("loginTab"),
        registerTab: document.getElementById("registerTab"),
        loginForm: document.getElementById("loginForm"),
        registerForm: document.getElementById("registerForm"),
        loginFormElement: document.getElementById("loginFormElement"),
        regForm: document.getElementById("regForm"),
        cancelLogin: document.getElementById("cancelLogin"),
        cancelReg: document.getElementById("cancelReg"),
        ctaLoginBtn: document.getElementById("ctaLoginBtn"),
        mainPage: document.getElementById("mainPage"),
        profilePage: document.getElementById("profilePage"),
        backToMainBtn: document.getElementById("backToMainBtn"),
        profileTab: document.getElementById("profileTab"),
        settingsTab: document.getElementById("settingsTab"),
        accountTab: document.getElementById("accountTab"),
        profileSection: document.getElementById("profileSection"),
        settingsSection: document.getElementById("settingsSection"),
        accountSection: document.getElementById("accountSection"),
        profileUsername: document.getElementById("profileUsername"),
        profileEmail: document.getElementById("profileEmail"),
        profileDate: document.getElementById("profileDate"),
        daysRegistered: document.getElementById("daysRegistered"),
        gamesPlayed: document.getElementById("gamesPlayed"),
        lastLogin: document.getElementById("lastLogin"),
        profileLevel: document.getElementById("profileLevel"),
        profileXP: document.getElementById("profileXP"),
        profileRankTitle: document.getElementById("profileRankTitle"),
        profileXPFill: document.getElementById("profileXPFill"),
        profileAchievements: document.getElementById("profileAchievements"),
        changeUsernameBtn: document.getElementById("changeUsernameBtn"),
        changePasswordBtn: document.getElementById("changePasswordBtn"),
        exportDataBtn: document.getElementById("exportDataBtn"),
        logoutAccountBtn: document.getElementById("logoutAccountBtn"),
        deleteAccountDangerBtn: document.getElementById("deleteAccountDangerBtn"),
        strengthFill: document.getElementById("strengthFill"),
        strengthText: document.getElementById("strengthText"),
        passwordRequirements: document.getElementById("passwordRequirements"),
        passwordMatch: document.getElementById("passwordMatch"),
    };

    const text = {
        ky: {
            navGames: "Оюндар",
            navAbout: "Биз жөнүндө",
            navContacts: "Байланыш",
            heroBadge: "Кыргыз оюн платформасы",
            heroTitle: "Оюн дүйнөсүнө кош келиңиз!",
            heroDescription: "Көчмөн Ордо — салттуу идеяларды жана заманбап оюн тажрыйбасын бириктирген платформа.",
            highlightOne: "7 оюн",
            highlightTwo: "1 аккаунт",
            highlightThree: "Тез старт",
            loginBtn: "Кирүү",
            playBtn: "Ойной баштоо",
            gamesBtn: "Оюндарды көрүү",
            stepsTitle: "Кандай иштейт",
            stepsDesc: "Үч жөнөкөй кадам жана сиз оюнга даярсыз.",
            step1Title: "Катталуу",
            step1Desc: "Бир мүнөттө аккаунт түзүп, профилиңизди сактайсыз.",
            step2Title: "Оюн тандоо",
            step2Desc: "Көчмөн Орноку, Канаттуу куш же Кыз куумайды тандаңыз.",
            step3Title: "Ойной баштоо",
            step3Desc: "Бир баскыч менен оюнга кирип кетиңиз.",
            ctaTitle: "Даярсызбы? Оюнга кирели!",
            ctaDesc: "Катталып, сүйүктүү оюнуңузду тандап бүгүн ойной баштаңыз.",
            ctaLoginBtn: "Кирүү",
            loginFormTitle: "Аккаунтка кирүү",
            registerFormTitle: "Катталуу",
            registerTab: "Катталуу",
            loginTab: "Кирүү",
            profileBtn: "Профиль",
            logout: "Чыгуу",
            deleteAccount: "Аккаунтту өчүрүү",
            today: "Бүгүн",
            deleted: "Аккаунт өчүрүлдү.",
            wrongPassword: "Сырсөз туура эмес.",
            userNotFound: "Мындай аккаунт табылган жок.",
            loginSuccess: "Кош келиңиз!",
            registerSuccess: "Катталуу ийгиликтүү аяктады.",
            logoutSuccess: "Аккаунттан чыктыңыз.",
            passwordMismatch: "Сырсөздөр дал келбеди.",
            weakPassword: "Сырсөз күчсүз. Баш тамга, кичине тамга, сан жана белгини кошуңуз.",
            emailInvalid: "Туура email киргизиңиз.",
            usernameInvalid: "Колдонуучу аты кеминде 3 белгиден болушу керек.",
            exists: "Бул email менен аккаунт мурунтан бар.",
            changedName: "Колдонуучу аты жаңыртылды.",
            changedPassword: "Сырсөз жаңыртылды.",
            exported: "Маалымат экспорттолду.",
            chooseLang: "Интерфейс тили",
            chooseTheme: "Тема",
            level: "Деңгээл",
            rank: "Даража",
            nomad: "Көчмөн",
            hunter: "Мерген",
            rider: "Чабандес",
            leader: "Сардар",
            legend: "Легенда",
        },
        ru: {
            navGames: "Игры",
            navAbout: "О нас",
            navContacts: "Контакты",
            heroBadge: "Кыргызская игровая платформа",
            heroTitle: "Добро пожаловать в мир игр!",
            heroDescription: "Кочмон Ордо объединяет национальные идеи и современный игровой опыт.",
            highlightOne: "7 игр",
            highlightTwo: "1 аккаунт",
            highlightThree: "Быстрый старт",
            loginBtn: "Войти",
            playBtn: "Начать игру",
            gamesBtn: "Смотреть игры",
            stepsTitle: "Как это работает",
            stepsDesc: "Три простых шага и вы готовы к игре.",
            step1Title: "Регистрация",
            step1Desc: "Создайте аккаунт за минуту и сохраните свой профиль.",
            step2Title: "Выбор игры",
            step2Desc: "Выберите Кочмон Орноку, Канаттуу куш или Кыз куумай.",
            step3Title: "Начать",
            step3Desc: "Откройте игру одним нажатием.",
            ctaTitle: "Готовы? Начинаем игру!",
            ctaDesc: "Зарегистрируйтесь и начните играть уже сегодня.",
            ctaLoginBtn: "Войти",
            loginFormTitle: "Вход в аккаунт",
            registerFormTitle: "Регистрация",
            registerTab: "Регистрация",
            loginTab: "Вход",
            profileBtn: "Профиль",
            logout: "Выйти",
            deleteAccount: "Удалить аккаунт",
            today: "Сегодня",
            deleted: "Аккаунт удален.",
            wrongPassword: "Неверный пароль.",
            userNotFound: "Пользователь не найден.",
            loginSuccess: "С возвращением!",
            registerSuccess: "Регистрация успешно завершена.",
            logoutSuccess: "Вы вышли из аккаунта.",
            passwordMismatch: "Пароли не совпадают.",
            weakPassword: "Слабый пароль. Добавьте заглавную, строчную, цифру и символ.",
            emailInvalid: "Введите корректный email.",
            usernameInvalid: "Имя пользователя должно быть не короче 3 символов.",
            exists: "Аккаунт с таким email уже существует.",
            changedName: "Имя пользователя обновлено.",
            changedPassword: "Пароль обновлен.",
            exported: "Данные экспортированы.",
            chooseLang: "Язык интерфейса",
            chooseTheme: "Тема",
            level: "Уровень",
            rank: "Ранг",
            nomad: "Кочевник",
            hunter: "Охотник",
            rider: "Наездник",
            leader: "Лидер",
            legend: "Легенда",
        },
        en: {
            navGames: "Games",
            navAbout: "About",
            navContacts: "Contacts",
            heroBadge: "Kyrgyz gaming platform",
            heroTitle: "Welcome to the game world!",
            heroDescription: "Kochmon Ordo blends traditional spirit with modern gameplay.",
            highlightOne: "7 games",
            highlightTwo: "1 account",
            highlightThree: "Fast start",
            loginBtn: "Sign in",
            playBtn: "Play now",
            gamesBtn: "View games",
            stepsTitle: "How it works",
            stepsDesc: "Three quick steps and you are ready.",
            step1Title: "Sign up",
            step1Desc: "Create an account in a minute and keep your profile.",
            step2Title: "Choose game",
            step2Desc: "Pick Kochmon Ornoku, Kanattuu Kush or Kyz Kuumai.",
            step3Title: "Start",
            step3Desc: "Open a game in one click.",
            ctaTitle: "Ready? Let's play!",
            ctaDesc: "Create account and start playing today.",
            ctaLoginBtn: "Sign in",
            loginFormTitle: "Sign in",
            registerFormTitle: "Create account",
            registerTab: "Register",
            loginTab: "Sign in",
            profileBtn: "Profile",
            logout: "Logout",
            deleteAccount: "Delete account",
            today: "Today",
            deleted: "Account deleted.",
            wrongPassword: "Incorrect password.",
            userNotFound: "User not found.",
            loginSuccess: "Welcome back!",
            registerSuccess: "Registration completed.",
            logoutSuccess: "Logged out.",
            passwordMismatch: "Passwords do not match.",
            weakPassword: "Weak password. Add uppercase, lowercase, number and special symbol.",
            emailInvalid: "Enter a valid email.",
            usernameInvalid: "Username must be at least 3 characters.",
            exists: "Email already exists.",
            changedName: "Username updated.",
            changedPassword: "Password updated.",
            exported: "Data exported.",
            chooseLang: "Interface language",
            chooseTheme: "Theme",
            level: "Level",
            rank: "Rank",
            nomad: "Nomad",
            hunter: "Hunter",
            rider: "Rider",
            leader: "Leader",
            legend: "Legend",
        },
    };

    const defaults = {
        settings: {
            language: "ky",
            theme: "light",
            notifications: {
                email: true,
                game: true,
                news: true,
            },
        },
    };

    function byId(id) {
        return document.getElementById(id);
    }

    function safeBind(el, eventName, handler) {
        if (el) el.addEventListener(eventName, handler);
    }

    function readJson(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return fallback;
            return JSON.parse(raw);
        } catch (e) {
            return fallback;
        }
    }

    function writeJson(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i += 1) {
            hash = ((hash << 5) - hash) + password.charCodeAt(i);
            hash |= 0;
        }
        return String(hash);
    }

    function getUsers() {
        return readJson(STORAGE.users, []);
    }

    function saveUsers(users) {
        writeJson(STORAGE.users, users);
    }

    function getSettings() {
        const current = readJson(STORAGE.settings, defaults.settings);
        return {
            ...defaults.settings,
            ...current,
            notifications: {
                ...defaults.settings.notifications,
                ...(current.notifications || {}),
            },
        };
    }

    function saveSettings(settings) {
        writeJson(STORAGE.settings, settings);
    }

    function getSession() {
        const session = readJson(STORAGE.session, null);
        if (!session) return null;
        if (!session.expiresAt || Date.now() > session.expiresAt) {
            localStorage.removeItem(STORAGE.session);
            return null;
        }
        return session;
    }

    function setSession(userId, rememberMe) {
        const ttl = rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
        writeJson(STORAGE.session, {
            userId,
            expiresAt: Date.now() + ttl,
        });
    }

    function clearSession() {
        localStorage.removeItem(STORAGE.session);
    }

    function currentLanguage() {
        const settings = getSettings();
        return text[settings.language] ? settings.language : "ky";
    }

    function t(key) {
        const lang = currentLanguage();
        return text[lang][key] || text.ky[key] || key;
    }

    function showToast(message, isError = false) {
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.style.position = "fixed";
        toast.style.right = "18px";
        toast.style.bottom = "18px";
        toast.style.padding = "10px 14px";
        toast.style.borderRadius = "10px";
        toast.style.zIndex = "9999";
        toast.style.color = "#fff";
        toast.style.fontWeight = "700";
        toast.style.background = isError ? "#b84131" : "#2f6b52";
        toast.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
    }

    function validEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function getCurrentUser() {
        const session = getSession();
        if (!session) return null;
        const users = getUsers();
        return users.find((u) => u.id === session.userId && !u.deleted) || null;
    }

    function hideAuthForms() {
        if (ui.authForms) ui.authForms.style.display = "none";
    }

    function showAuthForms(tab = "login") {
        if (!ui.authForms) return;
        ui.authForms.style.display = "block";
        const isLogin = tab === "login";
        if (ui.loginTab) ui.loginTab.classList.toggle("active", isLogin);
        if (ui.registerTab) ui.registerTab.classList.toggle("active", !isLogin);
        if (ui.loginForm) ui.loginForm.classList.toggle("active", isLogin);
        if (ui.registerForm) ui.registerForm.classList.toggle("active", !isLogin);
    }

    function hideUserMenu() {
        if (ui.userMenu) ui.userMenu.style.display = "none";
    }

    function updateAuthUI() {
        const user = getCurrentUser();
        const loggedIn = Boolean(user);

        if (ui.loginBtn) ui.loginBtn.style.display = loggedIn ? "none" : "inline-flex";
        if (ui.playBtn) ui.playBtn.style.display = loggedIn ? "inline-flex" : "none";
        if (ui.profileBtn) ui.profileBtn.style.display = loggedIn ? "inline-flex" : "none";
        if (ui.userMenuBtn) ui.userMenuBtn.style.display = loggedIn ? "inline-flex" : "none";

        if (ui.ctaLoginBtn) {
            if (loggedIn) {
                ui.ctaLoginBtn.innerHTML = `<i class="fas fa-user"></i> ${t("profileBtn")}`;
            } else {
                ui.ctaLoginBtn.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${t("ctaLoginBtn")}`;
            }
        }

        if (!loggedIn) {
            hideUserMenu();
            return;
        }

        if (ui.userName) ui.userName.textContent = user.username;
        if (ui.userEmail) ui.userEmail.textContent = user.email;
        updateProfileData(user);
    }

    function dateString(iso) {
        try {
            return new Date(iso).toLocaleDateString("ky-KG");
        } catch (e) {
            return "-";
        }
    }

    function daysSince(iso) {
        const start = new Date(iso).getTime();
        const delta = Date.now() - start;
        return Math.max(1, Math.floor(delta / (24 * 60 * 60 * 1000)));
    }

    function getRank(level) {
        if (level >= 16) return t("legend");
        if (level >= 11) return t("leader");
        if (level >= 7) return t("rider");
        if (level >= 4) return t("hunter");
        return t("nomad");
    }

    function achievements(user) {
        const list = [];
        if (user.gamesPlayed >= 1) list.push("Алгачкы оюн");
        if (user.gamesPlayed >= 10) list.push("Тажрыйбалуу оюнчу");
        if (daysSince(user.createdAt) >= 7) list.push("Бир жума командада");
        if (daysSince(user.createdAt) >= 30) list.push("Туруктуу мүчө");
        return list;
    }

    function updateProfileData(user) {
        if (!user) return;
        const days = daysSince(user.createdAt);
        const gamesPlayed = Number(user.gamesPlayed || 0);
        const xp = gamesPlayed * 25 + days * 2;
        const level = Math.max(1, Math.floor(xp / 100) + 1);
        const xpInLevel = xp % 100;

        if (ui.profileUsername) ui.profileUsername.textContent = user.username;
        if (ui.profileEmail) ui.profileEmail.textContent = user.email;
        if (ui.profileDate) ui.profileDate.textContent = `Катталган: ${dateString(user.createdAt)}`;
        if (ui.daysRegistered) ui.daysRegistered.textContent = String(days);
        if (ui.gamesPlayed) ui.gamesPlayed.textContent = String(gamesPlayed);
        if (ui.lastLogin) ui.lastLogin.textContent = user.lastLogin ? dateString(user.lastLogin) : t("today");
        if (ui.profileLevel) ui.profileLevel.textContent = `${t("level")} ${level}`;
        if (ui.profileXP) ui.profileXP.textContent = `${xp} XP`;
        if (ui.profileRankTitle) ui.profileRankTitle.textContent = `${t("rank")}: ${getRank(level)}`;
        if (ui.profileXPFill) ui.profileXPFill.style.width = `${xpInLevel}%`;

        if (ui.profileAchievements) {
            const items = achievements(user);
            ui.profileAchievements.innerHTML = "";
            if (items.length === 0) {
                const span = document.createElement("span");
                span.className = "badge-item";
                span.textContent = "Азырынча жок";
                ui.profileAchievements.appendChild(span);
            } else {
                items.forEach((item) => {
                    const span = document.createElement("span");
                    span.className = "badge-item unlocked";
                    span.textContent = item;
                    ui.profileAchievements.appendChild(span);
                });
            }
        }
    }

    function updateLandingVisibility(showProfile) {
        const sectionsToHide = document.querySelectorAll(".steps, .features, .cta-section");
        if (ui.mainPage) ui.mainPage.style.display = showProfile ? "none" : "grid";
        if (ui.profilePage) ui.profilePage.style.display = showProfile ? "block" : "none";
        sectionsToHide.forEach((s) => {
            s.style.display = showProfile ? "none" : "";
        });
    }

    function openProfile() {
        updateLandingVisibility(true);
        openProfileTab("profile");
        updateAuthUI();
    }

    function closeProfile() {
        updateLandingVisibility(false);
    }

    function openProfileTab(tab) {
        const map = {
            profile: [ui.profileTab, ui.profileSection],
            settings: [ui.settingsTab, ui.settingsSection],
            account: [ui.accountTab, ui.accountSection],
        };

        ["profile", "settings", "account"].forEach((k) => {
            const pair = map[k];
            if (!pair[0] || !pair[1]) return;
            pair[0].classList.toggle("active", k === tab);
            pair[1].classList.toggle("active", k === tab);
        });
    }

    function applyTheme() {
        const settings = getSettings();
        const root = document.documentElement;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const activeTheme = settings.theme === "auto" ? (prefersDark ? "dark" : "light") : settings.theme;

        root.classList.toggle("theme-dark", activeTheme === "dark");

        document.querySelectorAll(".theme-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.theme === settings.theme);
        });
    }

    function applyLanguage() {
        const lang = currentLanguage();
        const dict = text[lang] || text.ky;
        const navLinks = document.querySelectorAll(".nav-link");

        if (navLinks[0]) navLinks[0].textContent = dict.navGames;
        if (navLinks[1]) navLinks[1].textContent = dict.navAbout;
        if (navLinks[2]) navLinks[2].textContent = dict.navContacts;

        const mapped = [
            ["heroBadge", "heroBadge"],
            ["highlightOne", "highlightOne"],
            ["highlightTwo", "highlightTwo"],
            ["highlightThree", "highlightThree"],
            ["stepsTitle", "stepsTitle"],
            ["stepsDesc", "stepsDesc"],
            ["step1Title", "step1Title"],
            ["step1Desc", "step1Desc"],
            ["step2Title", "step2Title"],
            ["step2Desc", "step2Desc"],
            ["step3Title", "step3Title"],
            ["step3Desc", "step3Desc"],
            ["ctaTitle", "ctaTitle"],
            ["ctaDesc", "ctaDesc"],
            ["loginFormTitle", "loginFormTitle"],
            ["registerFormTitle", "registerFormTitle"],
        ];

        mapped.forEach(([id, key]) => {
            const el = byId(id);
            if (el) el.textContent = dict[key];
        });

        const heroTitle = document.querySelector(".hero-title");
        if (heroTitle) heroTitle.textContent = dict.heroTitle;

        const heroDescription = document.querySelector(".hero-description");
        if (heroDescription) heroDescription.textContent = dict.heroDescription;

        if (ui.loginBtn) ui.loginBtn.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${dict.loginBtn}`;
        if (ui.playBtn) ui.playBtn.innerHTML = `<i class="fas fa-play"></i> ${dict.playBtn}`;

        const gamesBtn = byId("gamesBtn");
        if (gamesBtn) gamesBtn.innerHTML = `<i class="fas fa-gamepad"></i> ${dict.gamesBtn}`;

        if (ui.loginTab) ui.loginTab.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${dict.loginTab}`;
        if (ui.registerTab) ui.registerTab.innerHTML = `<i class="fas fa-user-plus"></i> ${dict.registerTab}`;
        if (ui.profileBtn) ui.profileBtn.innerHTML = `<i class="fas fa-user-cog"></i> ${dict.profileBtn}`;
        if (ui.logoutBtn) ui.logoutBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> ${dict.logout}`;
        if (ui.deleteAccountMenuBtn) ui.deleteAccountMenuBtn.innerHTML = `<i class="fas fa-trash"></i> ${dict.deleteAccount}`;
        if (ui.deleteAccountDangerBtn) ui.deleteAccountDangerBtn.innerHTML = `<i class="fas fa-trash"></i> ${dict.deleteAccount}`;
        if (ui.ctaLoginBtn && !getCurrentUser()) ui.ctaLoginBtn.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${dict.ctaLoginBtn}`;

        document.querySelectorAll(".language-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });
    }

    function scorePassword(password) {
        let score = 0;
        if (password.length >= 8) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        return score;
    }

    function updatePasswordMeter() {
        const passwordInput = byId("password");
        const confirmInput = byId("confirmPassword");
        if (!passwordInput || !confirmInput) return;

        const password = passwordInput.value;
        const confirm = confirmInput.value;
        const score = scorePassword(password);

        if (ui.passwordRequirements) {
            ui.passwordRequirements.classList.toggle("show", password.length > 0);
        }

        const requirementMap = {
            "req-length": password.length >= 8,
            "req-uppercase": /[A-Z]/.test(password),
            "req-lowercase": /[a-z]/.test(password),
            "req-number": /[0-9]/.test(password),
            "req-special": /[^A-Za-z0-9]/.test(password),
        };

        Object.entries(requirementMap).forEach(([id, ok]) => {
            const el = byId(id);
            if (el) el.classList.toggle("valid", ok);
        });

        if (ui.strengthFill) {
            const percent = Math.min(100, score * 20);
            ui.strengthFill.style.width = `${percent}%`;
            if (score <= 2) ui.strengthFill.style.background = "#b84131";
            else if (score <= 3) ui.strengthFill.style.background = "#d38a1f";
            else if (score <= 4) ui.strengthFill.style.background = "#2f6b52";
            else ui.strengthFill.style.background = "#1f8f69";
        }

        if (ui.strengthText) {
            const levels = ["", "Алсыз", "Орточо", "Жакшы", "Күчтүү", "Абдан күчтүү"];
            ui.strengthText.textContent = password.length ? levels[score] : "Сырсөздү киргизиңиз";
        }

        if (ui.passwordMatch) {
            if (!confirm.length) {
                ui.passwordMatch.className = "password-match";
                ui.passwordMatch.textContent = "";
            } else if (password === confirm) {
                ui.passwordMatch.className = "password-match show match";
                ui.passwordMatch.textContent = "Сырсөздөр дал келди";
            } else {
                ui.passwordMatch.className = "password-match show no-match";
                ui.passwordMatch.textContent = "Сырсөздөр дал келген жок";
            }
        }
    }

    function registerUser(event) {
        event.preventDefault();
        const username = (byId("username")?.value || "").trim();
        const email = (byId("email")?.value || "").trim().toLowerCase();
        const password = byId("password")?.value || "";
        const confirm = byId("confirmPassword")?.value || "";

        if (username.length < 3) return showToast(t("usernameInvalid"), true);
        if (!validEmail(email)) return showToast(t("emailInvalid"), true);

        if (password !== confirm) return showToast(t("passwordMismatch"), true);
        if (scorePassword(password) < 4 || /\s/.test(password)) return showToast(t("weakPassword"), true);

        const users = getUsers();
        if (users.some((u) => u.email === email && !u.deleted)) return showToast(t("exists"), true);

        const now = new Date().toISOString();
        const user = {
            id: String(Date.now()),
            username,
            email,
            passwordHash: hashPassword(password),
            createdAt: now,
            lastLogin: now,
            gamesPlayed: 0,
            deleted: false,
        };

        users.push(user);
        saveUsers(users);
        setSession(user.id, true);
        if (ui.regForm) ui.regForm.reset();
        updatePasswordMeter();
        hideAuthForms();
        updateAuthUI();
        showToast(t("registerSuccess"));
    }

    function loginUser(event) {
        event.preventDefault();
        const email = (byId("loginEmail")?.value || "").trim().toLowerCase();
        const password = byId("loginPassword")?.value || "";
        const remember = Boolean(byId("rememberMe")?.checked);

        const users = getUsers();
        const user = users.find((u) => u.email === email && !u.deleted);
        if (!user) return showToast(t("userNotFound"), true);
        if (user.passwordHash !== hashPassword(password)) return showToast(t("wrongPassword"), true);

        user.lastLogin = new Date().toISOString();
        saveUsers(users);
        setSession(user.id, remember);
        if (ui.loginFormElement) ui.loginFormElement.reset();
        hideAuthForms();
        updateAuthUI();
        showToast(t("loginSuccess"));
    }

    function logoutUser() {
        clearSession();
        closeProfile();
        hideAuthForms();
        updateAuthUI();
        showToast(t("logoutSuccess"));
    }

    function deleteCurrentUser() {
        const user = getCurrentUser();
        if (!user) return;
        const ok = confirm("Аккаунтту өчүрөсүзбү? Бул аракет артка кайтарылбайт.");
        if (!ok) return;

        const users = getUsers();
        const idx = users.findIndex((u) => u.id === user.id);
        if (idx >= 0) {
            users[idx].deleted = true;
            saveUsers(users);
        }

        clearSession();
        closeProfile();
        hideAuthForms();
        updateAuthUI();
        showToast(t("deleted"));
    }

    function changeUsername() {
        const user = getCurrentUser();
        if (!user) return;
        const next = prompt("Жаңы колдонуучу атын жазыңыз:", user.username);
        if (!next) return;
        const name = next.trim();
        if (name.length < 3) return showToast(t("usernameInvalid"), true);

        const users = getUsers();
        const idx = users.findIndex((u) => u.id === user.id);
        if (idx < 0) return;
        users[idx].username = name;
        saveUsers(users);
        updateAuthUI();
        showToast(t("changedName"));
    }

    function changePassword() {
        const user = getCurrentUser();
        if (!user) return;
        const current = prompt("Учурдагы сырсөз:");
        if (!current) return;
        if (hashPassword(current) !== user.passwordHash) return showToast(t("wrongPassword"), true);

        const next = prompt("Жаңы сырсөз:");
        if (!next) return;
        if (scorePassword(next) < 4 || /\s/.test(next)) return showToast(t("weakPassword"), true);

        const users = getUsers();
        const idx = users.findIndex((u) => u.id === user.id);
        if (idx < 0) return;
        users[idx].passwordHash = hashPassword(next);
        saveUsers(users);
        showToast(t("changedPassword"));
    }

    function exportUserData() {
        const user = getCurrentUser();
        if (!user) return;

        const payload = {
            user: {
                username: user.username,
                email: user.email,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin,
                gamesPlayed: user.gamesPlayed || 0,
            },
            settings: getSettings(),
            exportedAt: new Date().toISOString(),
        };

        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "kochmon-ordo-data.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        showToast(t("exported"));
    }

    function applyNotificationSettingsToUI() {
        const settings = getSettings();
        const email = byId("emailNotifications");
        const game = byId("gameNotifications");
        const news = byId("newsNotifications");

        if (email) email.checked = settings.notifications.email;
        if (game) game.checked = settings.notifications.game;
        if (news) news.checked = settings.notifications.news;
    }

    function saveNotificationsFromUI() {
        const settings = getSettings();
        const email = byId("emailNotifications");
        const game = byId("gameNotifications");
        const news = byId("newsNotifications");

        settings.notifications.email = Boolean(email?.checked);
        settings.notifications.game = Boolean(game?.checked);
        settings.notifications.news = Boolean(news?.checked);
        saveSettings(settings);
    }

    function trackPlayAndOpenGames() {
        const user = getCurrentUser();
        if (user) {
            const users = getUsers();
            const idx = users.findIndex((u) => u.id === user.id);
            if (idx >= 0) {
                users[idx].gamesPlayed = Number(users[idx].gamesPlayed || 0) + 1;
                saveUsers(users);
            }
        }
        window.location.href = "games.html";
    }

    function initEvents() {
        safeBind(ui.loginBtn, "click", () => showAuthForms("login"));
        safeBind(ui.ctaLoginBtn, "click", () => {
            if (getCurrentUser()) openProfile();
            else showAuthForms("login");
        });
        safeBind(ui.playBtn, "click", trackPlayAndOpenGames);
        safeBind(ui.cancelLogin, "click", hideAuthForms);
        safeBind(ui.cancelReg, "click", hideAuthForms);

        safeBind(ui.loginTab, "click", () => showAuthForms("login"));
        safeBind(ui.registerTab, "click", () => showAuthForms("register"));
        safeBind(ui.loginFormElement, "submit", loginUser);
        safeBind(ui.regForm, "submit", registerUser);

        safeBind(byId("password"), "input", updatePasswordMeter);
        safeBind(byId("confirmPassword"), "input", updatePasswordMeter);

        safeBind(ui.profileBtn, "click", openProfile);
        safeBind(ui.backToMainBtn, "click", closeProfile);

        safeBind(ui.profileTab, "click", () => openProfileTab("profile"));
        safeBind(ui.settingsTab, "click", () => openProfileTab("settings"));
        safeBind(ui.accountTab, "click", () => openProfileTab("account"));

        safeBind(ui.userMenuBtn, "click", () => {
            if (!ui.userMenu) return;
            ui.userMenu.style.display = ui.userMenu.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", (event) => {
            const target = event.target;
            if (!ui.userMenu || !ui.userMenuBtn) return;
            const clickedInsideMenu = ui.userMenu.contains(target);
            const clickedMenuBtn = ui.userMenuBtn.contains(target);
            if (!clickedInsideMenu && !clickedMenuBtn) hideUserMenu();
        });

        safeBind(ui.logoutBtn, "click", logoutUser);
        safeBind(ui.logoutAccountBtn, "click", logoutUser);
        safeBind(ui.deleteAccountMenuBtn, "click", deleteCurrentUser);
        safeBind(ui.deleteAccountDangerBtn, "click", deleteCurrentUser);
        safeBind(ui.changeUsernameBtn, "click", changeUsername);
        safeBind(ui.changePasswordBtn, "click", changePassword);
        safeBind(ui.exportDataBtn, "click", exportUserData);

        document.querySelectorAll(".language-btn").forEach((btn) => {
            safeBind(btn, "click", () => {
                const settings = getSettings();
                settings.language = btn.dataset.lang || "ky";
                saveSettings(settings);
                applyLanguage();
                updateAuthUI();
            });
        });

        document.querySelectorAll(".theme-btn").forEach((btn) => {
            safeBind(btn, "click", () => {
                const settings = getSettings();
                settings.theme = btn.dataset.theme || "light";
                saveSettings(settings);
                applyTheme();
            });
        });

        safeBind(byId("emailNotifications"), "change", saveNotificationsFromUI);
        safeBind(byId("gameNotifications"), "change", saveNotificationsFromUI);
        safeBind(byId("newsNotifications"), "change", saveNotificationsFromUI);

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            const settings = getSettings();
            if (settings.theme === "auto") applyTheme();
        });
    }

    function init() {
        applyTheme();
        applyLanguage();
        applyNotificationSettingsToUI();
        updateAuthUI();
        closeProfile();
        initEvents();
    }

    init();
})();
