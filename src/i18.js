import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    uz: {
        translation: {
            "title": "React dasturchi",
            "description": "Salom men React dasturchiman kelajakda Senior dasturchi bo'lmoqchiaman",
            "btn": "Kirish"
        }
    },
    ru: {
        translation: {
            "title": "React-разработчик",
            "description": "Здравствуйте, я React-разработчик и в будущем стремлюсь стать Senior-разработчиком.",
            "btn": "Введение"
        }
    },
    en: {
        translation: {
            "title": "React Developer",
            "description": "Hello, I am a React developer, and I aim to become a Senior developer in the future.",
            "btn": "Login"
        }
    }
}

i18next.use(initReactI18next).init({
    resources,
    lng: "uz"
})

export default i18next;