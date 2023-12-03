const shops = [
    {
        id: 1,
        image: '../assets/images/products/cát-mèo2.png',
        name: 'Cát đậu nành vệ sinh mèo Tofu 6L', 
        price: '100,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'cat',
            type: {
                id: 'accessories',
                name: 'Cát vệ sinh cho mèo'
            },
        }
    },
    {
        id: 2,
        image: '../assets/images/products/lược_chải_lông_-2.png',
        name: 'Lược chải lông cho thú cưng', 
        price: '50,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'cat',
            type: {
                id: 'comb_cat',
                name: 'Lược chải lông'
            },
        }
    },
    {
        id: 3,
        image: '../assets/images/products/kiềm_cắt_móng-2.png',
        name: 'Kìm bấm móng cho thú cưng', 
        price: '95,000',
        unit: 'đ',
        rating: '2',
        featured: {
            genus: 'cat',
            type: {
                id: 'nail_clippers_cat',
                name: 'Kìm bấm móng'
            },
        }
    },
    {
        id: 4,
        image: '../assets/images/products/nhà_mèo.png',
        name: ' Nhà cho mèo Hipipet tai thỏ', 
        price: '400,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'cat',
            type: {
                id: 'house_cat',
                name: 'Nhà cho mèo'
            },
        }
    },
    {
        id: 5,
        image: '../assets/images/products/chén-mèo.png',
        name: 'Chén đựng thức ăn cho mèo', 
        price: '120,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'cat',
            type: {
                id: 'bowls_cat',
                name: 'Chén đựng thức ăn'
            },
        }
    },
    {
        id: 6,
        image: '../assets/images/products/đồ_mèo.png',
        name: 'Áo ba lỗ cho mèo màu Pastel', 
        price: '50,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'cat',
            type: {
                id: 'clothes_cat',
                name: 'Quần áo'
            },
        }
    },
    {
        id: 7,
        image: '../assets/images/products/giường-cào.png',
        name: 'Mrbunny Giường cào mèo bằng gỗ ', 
        price: '280,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'cat',
            type: {
                id: 'rake_bed',
                name: 'Giường cào'
            },
        }
    },
    {
        id: 8,
        image: '../assets/images/products/food2.png',
        name: 'Hạt ngũ cốc cho mèo con', 
        price: '180,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'food_cat',
                name: 'Đồ ăn cho mèo'
            },
        }
    },
    {
        id: 9,
        image: '../assets/images/products/food1.png',
        name: 'Đồ ăn hạt hỗ trợ tiêu hoá cho chó', 
        price: '200,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'dog',
            type: {
                id: 'food_dog',
                name: 'Đồ ăn cho chó'
            },
        }
    },
    {
        id: 10,
        image: '../assets/images/products/đồ-chơi.png',
        name: 'Đồ chơi bóng chuột bằng sắt ', 
        price: '45,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'cat',
            type: {
                id: 'toy_cat',
                name: 'Đồ chơi cho mèo'
            },
        }
    },
    {
        id: 11,
        image: '../assets/images/products/khay-cát.png',
        name: 'Nhà vệ sinh cho mèo', 
        price: '800,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'toilet_cat',
                name: 'Nhà vệ sinh cho mèo'
            },
        }
    },
    {
        id: 12,
        image: '../assets/images/products/đồ-mèo-2.png',
        name: 'Set đồ dễ thương cho chó mèo', 
        price: '75,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'dog',
            type: {
                id: 'clothes_dog',
                name: 'Quần áo'
            },
        }
    },
    {
        id: 13,
        image: '../assets/images/products/Rectangle-37.png',
        name: 'Áo hai dây ba lỗ mùa hè cho cún', 
        price: '50,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'dog',
            type: {
                id: 'clothes_dog',
                name: 'Quần áo'
            },
        }
    },
    {
        id: 14,
        image: '../assets/images/products/khay-cát.png',
        name: 'Nhà vệ sinh cho mèo', 
        price: '500,000',
        unit: 'đ',
        rating: '2',
        featured: {
            genus: 'cat',
            type: {
                id: 'toilet_cat',
                name: 'Nhà vệ sinh cho mèo'
            },
        }
    },
    {
        id: 15,
        image: '../assets/images/products/chén-mèo.png',
        name: 'Chén đựng thức ăn', 
        price: '180,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'dog',
            type: {
                id: 'bowls_dog',
                name: 'Chén đựng thức ăn'
            },
        }
    },
    {
        id: 16,
        image: '../assets/images/products/giường-cào.png',
        name: 'Mrbunny Giường cào mèo bằng gỗ ', 
        price: '2,080,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'cat',
            type: {
                id: 'rake_bed',
                name: 'Giường cào'
            },
        }
    },
    {
        id: 17,
        image: '../assets/images/products/lược_chải_lông_-2.png',
        name: 'Lược chải lông cho thú cưng', 
        price: '80,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'dog',
            type: {
                id: 'comb_dog',
                name: 'Lược chải lông'
            },
        }
    },
    {
        id: 18,
        image: '../assets/images/products/kiềm_cắt_móng-2.png',
        name: 'Kìm bấm móng cho thú cưng', 
        price: '105,000',
        unit: 'đ',
        rating: '2',
        featured: {
            genus: 'dog',
            type: {
                id: 'nail_clippers_dog',
                name: 'Kìm bấm móng'
            },
        }
    },
];

export { shops };