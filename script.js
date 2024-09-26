// Translation data
const translations = {
    en: "Welcome to my profile!",
    ar: "مرحبًا بكم في ملفي الشخصي!",
    ur: "میرے پروفائل میں خوش آمدید!",
    fr: "Bienvenue sur mon profil!"
};

// Function to switch language
function switchLanguage(lang) {
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.textContent = translations[lang];
}
