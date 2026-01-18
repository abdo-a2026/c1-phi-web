// بيانات المراحل الدراسية مع الدروس التفصيلية
const stagesData = [
    {
        id: 1,
        name: 'الثالث المتوسط',
        icon: '<i class="fa-solid fa-3"></i>',
        semesters: [
            {
                id: 1,
                name: 'الفصل الأول',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx1',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الأول للثالث المتوسط',
                examLink: 'https://youtube.com/watch?v=exam1',
                lessons: [
                    {
                        id: 1,
                        name: 'مقدمة في الفيزياء',
                        videoLink: 'https://youtube.com/watch?v=lesson1-1'
                    },
                    {
                        id: 2,
                        name: 'الحركة والسرعة',
                        videoLink: 'https://youtube.com/watch?v=lesson1-2'
                    },
                    {
                        id: 3,
                        name: 'التسارع',
                        videoLink: 'https://youtube.com/watch?v=lesson1-3'
                    },
                    {
                        id: 4,
                        name: 'قوانين نيوتن',
                        videoLink: 'https://youtube.com/watch?v=lesson1-4'
                    },
                    {
                        id: 5,
                        name: 'الاحتكاك',
                        videoLink: 'https://youtube.com/watch?v=lesson1-5'
                    }
                ]
            },
            {
                id: 2,
                name: 'الفصل الثاني',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx2',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للثالث المتوسط',
                examLink: 'https://youtube.com/watch?v=exam2',
                lessons: [
                    {
                        id: 1,
                        name: 'الطاقة وأنواعها',
                        videoLink: 'https://youtube.com/watch?v=lesson2-1'
                    },
                    {
                        id: 2,
                        name: 'قانون حفظ الطاقة',
                        videoLink: 'https://youtube.com/watch?v=lesson2-2'
                    },
                    {
                        id: 3,
                        name: 'الشغل والقدرة',
                        videoLink: 'https://youtube.com/watch?v=lesson2-3'
                    },
                    {
                        id: 4,
                        name: 'الآلات البسيطة',
                        videoLink: 'https://youtube.com/watch?v=lesson2-4'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'الرابع العلمي',
        icon: '<i class="fa-solid fa-4"></i>',
        semesters: [
            {
                id: 1,
                name: 'الفصل الأول',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx3',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الأول للرابع العلمي',
                examLink: 'https://youtube.com/watch?v=exam3',
                lessons: [
                    {
                        id: 1,
                        name: 'الكميات الفيزيائية',
                        videoLink: 'https://youtube.com/watch?v=lesson3-1'
                    },
                    {
                        id: 2,
                        name: 'الحركة في بعد واحد',
                        videoLink: 'https://youtube.com/watch?v=lesson3-2'
                    },
                    {
                        id: 3,
                        name: 'السقوط الحر',
                        videoLink: 'https://youtube.com/watch?v=lesson3-3'
                    },
                    {
                        id: 4,
                        name: 'القوة والحركة',
                        videoLink: 'https://youtube.com/watch?v=lesson3-4'
                    },
                    {
                        id: 5,
                        name: 'الاتزان',
                        videoLink: 'https://youtube.com/watch?v=lesson3-5'
                    }
                ]
            },
            {
                id: 2,
                name: 'الفصل الثاني',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx4',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للرابع العلمي',
                examLink: 'https://youtube.com/watch?v=exam4',
                lessons: [
                    {
                        id: 1,
                        name: 'الحرارة ودرجة الحرارة',
                        videoLink: 'https://youtube.com/watch?v=lesson4-1'
                    },
                    {
                        id: 2,
                        name: 'انتقال الحرارة',
                        videoLink: 'https://youtube.com/watch?v=lesson4-2'
                    },
                    {
                        id: 3,
                        name: 'التمدد الحراري',
                        videoLink: 'https://youtube.com/watch?v=lesson4-3'
                    },
                    {
                        id: 4,
                        name: 'الغازات',
                        videoLink: 'https://youtube.com/watch?v=lesson4-4'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'الخامس العلمي',
        icon: '<i class="fa-solid fa-5"></i>',
        semesters: [
            {
                id: 1,
                name: 'الفصل الأول',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx5',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الأول للخامس العلمي',
                examLink: 'https://youtube.com/watch?v=exam5',
                lessons: [
                    {
                        id: 1,
                        name: 'المتجهات',
                        videoLink: 'https://youtube.com/watch?v=lesson5-1'
                    },
                    {
                        id: 2,
                        name: 'الحركة في بعدين',
                        videoLink: 'https://youtube.com/watch?v=lesson5-2'
                    },
                    {
                        id: 3,
                        name: 'الحركة الدائرية',
                        videoLink: 'https://youtube.com/watch?v=lesson5-3'
                    },
                    {
                        id: 4,
                        name: 'الجاذبية',
                        videoLink: 'https://youtube.com/watch?v=lesson5-4'
                    },
                    {
                        id: 5,
                        name: 'الزخم',
                        videoLink: 'https://youtube.com/watch?v=lesson5-5'
                    }
                ]
            },
            {
                id: 2,
                name: 'الفصل الثاني',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx6',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للخامس العلمي',
                examLink: 'https://youtube.com/watch?v=exam6',
                lessons: [
                    {
                        id: 1,
                        name: 'الموجات',
                        videoLink: 'https://youtube.com/watch?v=lesson6-1'
                    },
                    {
                        id: 2,
                        name: 'الصوت',
                        videoLink: 'https://youtube.com/watch?v=lesson6-2'
                    },
                    {
                        id: 3,
                        name: 'الضوء والانعكاس',
                        videoLink: 'https://youtube.com/watch?v=lesson6-3'
                    },
                    {
                        id: 4,
                        name: 'الانكسار',
                        videoLink: 'https://youtube.com/watch?v=lesson6-4'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'السادس العلمي',
        icon: '<i class="fa-solid fa-6"></i>',
        semesters: [
            {
                id: 1,
                name: 'الفصل الأول',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx7',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الأول للسادس العلمي',
                examLink: 'https://youtube.com/watch?v=exam7',
                lessons: [
                    {
                        id: 1,
                        name: 'الكهرباء الساكنة',
                        videoLink: 'https://youtube.com/watch?v=lesson7-1'
                    },
                    {
                        id: 2,
                        name: 'المجال الكهربائي',
                        videoLink: 'https://youtube.com/watch?v=lesson7-2'
                    },
                    {
                        id: 3,
                        name: 'الجهد الكهربائي',
                        videoLink: 'https://youtube.com/watch?v=lesson7-3'
                    },
                    {
                        id: 4,
                        name: 'المكثفات',
                        videoLink: 'https://youtube.com/watch?v=lesson7-4'
                    },
                    {
                        id: 5,
                        name: 'التيار الكهربائي',
                        videoLink: 'https://youtube.com/watch?v=lesson7-5'
                    }
                ]
            },
            {
                id: 2,
                name: 'الفصل الثاني',
                playlist: 'https://youtube.com/playlist?list=PLxxxxxx8',
                whatsappMsg: 'مرحبًا أستاذ، أريد شراء ملزمة الفصل الثاني للسادس العلمي',
                examLink: 'https://youtube.com/watch?v=exam8',
                lessons: [
                    {
                        id: 1,
                        name: 'المغناطيسية',
                        videoLink: 'https://youtube.com/watch?v=lesson8-1'
                    },
                    {
                        id: 2,
                        name: 'الحث الكهرومغناطيسي',
                        videoLink: 'https://youtube.com/watch?v=lesson8-2'
                    },
                    {
                        id: 3,
                        name: 'الفيزياء الحديثة',
                        videoLink: 'https://youtube.com/watch?v=lesson8-3'
                    },
                    {
                        id: 4,
                        name: 'الفيزياء النووية',
                        videoLink: 'https://youtube.com/watch?v=lesson8-4'
                    }
                ]
            }
        ]
    }
];

// رقم الواتساب
const whatsappNumber = '9647XXXXXXXXX';

// روابط التواصل الاجتماعي
const socialLinks = {
    whatsapp: `https://wa.me/${whatsappNumber}`,
    youtube: 'https://youtube.com/@username',
    instagram: 'https://instagram.com/username',
    telegram: 'https://t.me/username',
    phone: '+9647XXXXXXXXX'
};