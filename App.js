const Header = () => {
    return (
        <div className="header">
            <img className="logo" alt="Logo" src="https://yt3.googleusercontent.com/Z5AwukhuUCwpdx3m75x1Yl5t4NQEeBdIDB8uf8CpankcRrNFZTMD6NlEOJSB0QnRfito9_tV=s900-c-k-c0x00ffffff-no-rj" />
            <div className="nav-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Cart</a></li>
            </div>
        </div>
    )
}

const restrauntList = [
    {
        "info": {
            "id": "102216",
            "name": "McDonald's",
            "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
            "locality": "Anand Sojitra Road",
            "areaName": "Vallabh Vidyanagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 01:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "340376",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Sarvodaya Society",
            "areaName": "Vallabh Vidyanagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "548212",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Mahadev Nagar",
            "areaName": "mahadev-nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "2",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-25 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "133905",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Maruti Solaris",
            "areaName": "Hadgood",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 03:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "789792",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
            "locality": "Anand Sojitra Road",
            "areaName": "Maruti Solaris Annex",
            "costForTwo": "₹800 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "4961",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-25 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "161893",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
            "locality": "V. V. NAGAR ROAD",
            "areaName": "TRIVENI ARCADE",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "749990",
            "name": "Taco Bell",
            "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
            "locality": "Maruti Solaris Mall",
            "areaName": "Sojitra Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Mexican"
            ],
            "avgRating": 4,
            "parentId": "1557",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-25 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "603119",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "s4gnodhkjs1athnecud0",
            "locality": "Maruti Solaris Mall",
            "areaName": "Jitodia",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "10804",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-25 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "260784",
            "name": "Cafe Coffee Day",
            "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
            "locality": "Time Square",
            "areaName": "Vallabh Vidyanagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Burgers",
                "Ice Cream",
                "Bakery",
                "Fast Food"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "1",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-25 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "499780",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
            "locality": "Anand Sojitra Road",
            "areaName": "Vallabh Vidyanagar",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "6249",
            "avgRatingString": "4.6",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 13,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    },
    {
        "info": {
            "id": "286333",
            "name": "Jassi De Parathe",
            "cloudinaryImageId": "adkbzjkajqtle1yaq3dm",
            "locality": "Vidya Nagar",
            "areaName": "Vallabh Vidyanagar",
            "costForTwo": "₹700 for two",
            "cuisines": [
                "North Indian",
                "Snacks",
                "Chaat"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "109840",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-25 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        }
    }
]

const RestrauntCard = ({ restaurant }) => {
    return (
        <div className="card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`} />
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.cuisines.join(", ")}</h3>
            <h4>{restaurant.avgRatingString} stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="restaurant">
            {/* <RestrauntCard restaurant={restrauntList[0].info} />
            <RestrauntCard restaurant={restrauntList[1].info} />
            <RestrauntCard restaurant={restrauntList[2].info} />
            <RestrauntCard restaurant={restrauntList[3].info} />
            <RestrauntCard restaurant={restrauntList[4].info} />
            <RestrauntCard restaurant={restrauntList[5].info} />
            <RestrauntCard restaurant={restrauntList[6].info} />
            <RestrauntCard restaurant={restrauntList[7].info} />
            <RestrauntCard restaurant={restrauntList[8].info} />
            <RestrauntCard restaurant={restrauntList[9].info} />
            <RestrauntCard restaurant={restrauntList[10].info} /> */}
            {restrauntList.map((restraunt) => {
                return <RestrauntCard restaurant={restraunt.info} key={restraunt.info.id}/>
            })}
        </div>
    )
}

const Footer = () => {
    return (
        <h1>Footer</h1>
    )
}



function App() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

export default App;