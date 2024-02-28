import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to our website!',
        home: 'Home',
        products: 'Products',
        favourites: 'favourites',
        categories: 'categories',
        SearchProducts: 'search for products',
        Login : 'Login',
        Cart : 'Cart',
        HealthBeauty:'Health',
        Honey:'Honey',
        Oils:'Oils',
        Herbs:'Herbs',
        More:'More',
        ForYou:'Specials picked for you',
        NewProducts:'New products',
        NewsLetter:'Newsletter',
        SubscribeUs:'Subscribe our newsletter to get the best offers',
        YourEmail:'Your email',
        // Footer Text
        TheHoney:'Honey',
        TheOild :'Oils',
        Recipes:'Recipes',
        HowWeAre:'How we are',
        Vision:'Vision',
        About:'About Us',
        PaymentMethods:'Payment methods',
        Points:'Points',
        TheQuestions:'FAQ',
        ContactUs:'Contact Us',
        
      },
    },
    ar: {
      translation: {
        welcome: 'أهلا بك في موقعنا!',
        home: 'الرئيسية',
        products: 'المنتجات',
        favourites : 'المفضلة',
        categories : 'التصنيفات',
        SearchProducts: 'البحث عن المنتجات',
        Login : 'تسجيل الدخول' ,
        Cart : 'عربة التسوق',
        HealthBeauty:'صحة',
        Honey: 'عســـل',
        Oils : 'زيـــوت' ,
        Herbs : 'أعشاب',
        More: 'المزيد',
        ForYou:'منتجات مختارة لك',
        NewProducts: 'منتجات جديده',
        TheHoney:'العسل',
        Recipes:'وصفات',

        HowWeAre:'من نحن',
        Vision:'الرؤية',
        About:'عن الشركة',
        PaymentMethods:'وسائل الدفع',
        Points:'النقاط',
        TheQuestions:'الأسئلة الشائعة',
        ContactUs:'تواصل معنا',
        NewsLetter:'القائمة البريدية',
        SubscribeUs:'اشترك في قائمتنا البريدية للحصول علي افضل العروض',
        YourEmail:'بريدك الألكتروني',

      },
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
