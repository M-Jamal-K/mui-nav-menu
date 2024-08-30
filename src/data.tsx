// Define the type for a single link item
export interface NavLink {
    href?: string;
    name?: string;
    subLinks?: NavLink[]; // Updated this line to allow an array of NavLink
    onClick?: () => void;
    render?: undefined;
}

export const NavLinks: NavLink[] = [
    {
        name: 'Electronics',
        onClick: () => { alert("YEEE HAAAAWWWWW!!!!"); },
        subLinks: [
            {
                name: 'Smartphones',
                href: '/electronics/smartphones',
                subLinks: [
                    {
                        name: 'Android Phones',
                        href: '/electronics/smartphones/android',
                    },
                    {
                        name: 'iPhones',
                        href: '/electronics/smartphones/iphones',
                    },
                    {
                        name: 'VodaPhone',
                        href: '/electronics/smartphones/vodaPhone',
                        subLinks: [
                            {
                                name: 'VodaPhone One',
                                href: '/electronics/smartphones/vodaPhoneone',
                            },
                            {
                                name: 'VodaPhone Two',
                                href: '/electronics/smartphones/vodaPhonetwo',
                            }
                        ]
                    },
                ]
            },
            {
                name: 'Laptops',
                href: '/electronics/laptops',
                subLinks: [
                    {
                        name: 'Gaming Laptops',
                        href: '/electronics/laptops/gaming',
                    },
                    {
                        name: 'Ultrabooks',
                        href: '/electronics/laptops/ultrabooks',
                    }
                ]
            }
        ]
    },
    {
        name: 'Books',
        href: '/books',
        subLinks: [
            {
                name: 'Fiction',
                href: '/books/fiction',
                subLinks: [
                    {
                        name: 'Science Fiction',
                        href: '/books/fiction/scifi',
                    },
                    {
                        name: 'Mystery',
                        href: '/books/fiction/mystery',
                    }
                ]
            },
            {
                name: 'Non-Fiction',
                href: '/books/nonfiction',
                subLinks: [
                    {
                        name: 'Biographies',
                        href: '/books/nonfiction/biographies',
                    },
                    {
                        name: 'Self-Help',
                        href: '/books/nonfiction/selfhelp',
                    }
                ]
            }
        ]
    },
    {
        name: 'Clothing',
        href: '/clothing',
        subLinks: [
            {
                name: 'Men\'s Clothing',
                href: '/clothing/men',
                subLinks: [
                    {
                        name: 'Shirts',
                        href: '/clothing/men/shirts',
                    },
                    {
                        name: 'Jeans',
                        href: '/clothing/men/jeans',
                    }
                ]
            },
            {
                name: 'Women\'s Clothing',
                href: '/clothing/women',
                subLinks: [
                    {
                        name: 'Dresses',
                        href: '/clothing/women/dresses',
                    },
                    {
                        name: 'Tops',
                        href: '/clothing/women/tops',
                    }
                ]
            }
        ]
    },
    {
        name: 'Home & Garden',
        href: '/home-garden',
        subLinks: [
            {
                name: 'Furniture',
                href: '/home-garden/furniture',
                subLinks: [
                    {
                        name: 'Living Room',
                        href: '/home-garden/furniture/living-room',
                    },
                    {
                        name: 'Bedroom',
                        href: '/home-garden/furniture/bedroom',
                    }
                ]
            },
            {
                name: 'Gardening',
                href: '/home-garden/gardening',
                subLinks: [
                    {
                        name: 'Tools',
                        href: '/home-garden/gardening/tools',
                    },
                    {
                        name: 'Plants',
                        href: '/home-garden/gardening/plants',
                    }
                ]
            }
        ]
    }
];
