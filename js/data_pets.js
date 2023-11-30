const pets = [
    {
        id: 1,
        image: '../assets/images/Pets/alaska.png',
        name: 'Alaska Malamute trắng xám ', 
        price: '11,000,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'dog',
            type: {
                id: 'alaska',
                name: 'Alaska'
            },
        }
    },
    {
        id: 2,
        image: '../assets/images/Pets/akita-0.png',
        name: 'Akita vàng trắng', 
        price: '19,000,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'dog',
            type: {
                id: 'akita',
                name: 'Akita'
            },
        }
    },
    {
        id: 3,
        image: '../assets/images/Pets/akita-1.png',
        name: 'Akita đen nâu trắng', 
        price: '26,500,000',
        unit: 'đ',
        rating: '2',
        featured: {
            genus: 'dog',
            type: {
                id: 'akita',
                name: 'Akita'
            },
        }
    },
    {
        id: 4,
        image: '../assets/images/Pets/shiba-0.png',
        name: 'Shiba vàng thuần', 
        price: '26,000,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'dog',
            type: {
                id: 'shiba',
                name: 'Shiba'
            },
        }
    },
    {
        id: 5,
        image: '../assets/images/Pets/shiba-1.png',
        name: 'Shiba đen trắng', 
        price: '42,000,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'dog',
            type: {
                id: 'shiba',
                name: 'Shiba'
            },
        }
    },
    {
        id: 6,
        image: '../assets/images/Pets/british-shorthair-0.png',
        name: 'Anh lông ngắn xám', 
        price: '14,000,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'cat',
            type: {
                id: 'british-shorthair',
                name: 'Anh lông ngắn'
            },
        }
    },
    {
        id: 7,
        image: '../assets/images/Pets/scottish-fold-0.png',
        name: 'Anh tai cụp xám vàng', 
        price: '17,000,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'cat',
            type: {
                id: 'scottish-fold',
                name: 'Anh tai cụp'
            },
        }
    },
    {
        id: 8,
        image: '../assets/images/Pets/british-shorthair-1.png',
        name: 'Anh lông ngắn nâu', 
        price: '18,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'british-shorthair',
                name: 'Anh lông ngắn'
            },
        }
    },
    {
        id: 9,
        image: '../assets/images/Pets/poodle-0.png',
        name: 'Poodle nâu', 
        price: '17,000,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'dog',
            type: {
                id: 'poodle',
                name: 'Poodle'
            },
        }
    },
    {
        id: 10,
        image: '../assets/images/Pets/poodle-1.png',
        name: 'Poodle trắng', 
        price: '9,000,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'dog',
            type: {
                id: 'poodle',
                name: 'Poodle'
            },
        }
    },
    {
        id: 11,
        image: '../assets/images/Pets/pomeranian-0.png',
        name: 'Pomeranian đen vàng', 
        price: '30,000,000',
        unit: 'đ',
        rating: '2',
        featured: {
            genus: 'dog',
            type: {
                id: 'pomeranian',
                name: 'Pomeranian'
            },
        }
    },
    {
        id: 12,
        image: '../assets/images/Pets/pomeranian-1.png',
        name: 'Pomeranian nâu trắng', 
        price: '37,000,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'dog',
            type: {
                id: 'pomeranian',
                name: 'Pomeranian'
            },
        }
    },
    {
        id: 13,
        image: '../assets/images/Pets/golden-retriever-0.png',
        name: 'Golden Retriever vàng', 
        price: '500,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'dog',
            type: {
                id: 'golden-retriever',
                name: 'Golden Retriever'
            },
        }
    },
    {
        id:  14,
        image: '../assets/images/Pets/persian-0.png',
        name: 'Ba Tư đen trắng', 
        price: '14,000,000',
        unit: 'đ',
        rating: '4',
        featured: {
            genus: 'cat',
            type: {
                id: 'Persian',
                name: 'Ba Tư'
            },
        }
    },
    {
        id: 15,
        image: '../assets/images/Pets/persian-1.png',
        name: 'Ba Tư nâu nhạt', 
        price: '24,000,000',
        unit: 'đ',
        rating: '5',
        featured: {
            genus: 'cat',
            type: {
                id: 'Persian',
                name: 'Ba Tư'
            },
        }
    },
    {
        id: 16,
        image: '../assets/images/Pets/corgi-0.png',
        name: 'Corgi nâu vàng trắng', 
        price: '18,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'dog',
            type: {
                id: 'corgi',
                name: 'Corgi'
            },
        }
    },
    {
        id: 17,
        image: '../assets/images/Pets/corgi-1.png',
        name: 'Corgi vàng trắng', 
        price: '28,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'dog',
            type: {
                id: 'corgi',
                name: 'Corgi'
            },
        }
    },
    {
        id: 18,
        image: '../assets/images/Pets/chihuahua-0.png',
        name: 'Chihuahua trắng', 
        price: '28,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'dog',
            type: {
                id: 'chihuahua',
                name: 'Chihuahua'
            },
        }
    },
    {
        id: 19,
        image: '../assets/images/Pets/ragdoll-0.png',
        name: 'Ragdoll Lilac Lynx', 
        price: '22,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'ragdoll',
                name: 'Ragdoll'
            },
        }
    },
    {
        id: 20,
        image: '../assets/images/Pets/chihuahua-1.png',
        name: 'Chihuahua vàng', 
        price: '38,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'dog',
            type: {
                id: 'chihuahua',
                name: 'Chihuahua'
            },
        }
    },
    {
        id: 21,
        image: '../assets/images/Pets/persian-2.png',
        name: 'Ba Tư xám', 
        price: '38,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'Persian',
                name: 'Ba Tư'
            },
        }
    },
    {
        id: 22,
        image: '../assets/images/Pets/ragdoll-1.png',
        name: 'Ragdoll Lilac Lynx', 
        price: '38,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'ragdoll',
                name: 'Ragdoll'
            },
        }
    },
    {
        id: 23,
        image: '../assets/images/Pets/munchkin-0.png',
        name: 'Munchkin đen trắng', 
        price: '38,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'munchkin',
                name: 'Chân ngắn Munchkin'
            },
        }
    },
    {
        id: 24,
        image: '../assets/images/Pets/munchkin-1.png',
        name: 'Munchkin trắng xám', 
        price: '25,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'munchkin',
                name: 'Chân ngắn Munchkin'
            },
        }
    },
    {
        id: 25,
        image: '../assets/images/Pets/munchkin-2.png',
        name: 'Munchkin trắng vàng', 
        price: '21,000,000',
        unit: 'đ',
        rating: '3',
        featured: {
            genus: 'cat',
            type: {
                id: 'munchkin',
                name: 'Chân ngắn Munchkin'
            },
        }
    },
];

export { pets };