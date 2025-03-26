import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <img src="https://assets.zenn.com/strapi_assets/food_logo_5fbb88038c.png" className="logo"></img>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const restoList = [{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "405798",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Malleshwaram",
      "areaName": "Malleshwaram",
      "costForTwo": "₹250 for two",
      "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "61955",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.3K+",
      "sla": {
          "deliveryTime": 55,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-03-26 22:00:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                  "description": "Delivery!"
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
                              "description": "Delivery!",
                              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "3.5",
              "ratingCount": "63"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/bangalore/chinese-wok-malleshwaram-rest405798",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "10892",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b7a44079-4da0-44f4-95c8-5e5f58b7a082_10892.jpg",
      "locality": "Vani Vilas Road",
      "areaName": "Basavanagudi",
      "costForTwo": "₹350 for two",
      "cuisines": [
          "Pizzas"
      ],
      "avgRating": 4.2,
      "parentId": "721",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-03-27 02:00:00",
          "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/bangalore/pizza-hut-vani-vilas-road-basavanagudi-rest10892",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "770772",
      "name": "Olio - The Wood Fired Pizzeria",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/bbfbe1b8-c0b4-4470-bff7-67f7793f8355_770772.jpg",
      "locality": "Ali Askar Road",
      "areaName": "Central Bangalore",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Snacks",
          "Beverages",
          "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "11633",
      "avgRatingString": "4.3",
      "totalRatingsString": "831",
      "sla": {
          "deliveryTime": 63,
          "lastMileTravel": 5.5,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "5.5 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-03-27 06:00:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "newg.png",
                  "description": "Gourmet"
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
                              "description": "Gourmet",
                              "imageId": "newg.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-central-bangalore-rest770772",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "365932",
      "name": "Krispy Kreme - Doughnuts & Coffee",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/22/2dbc3c2d-6484-4055-9047-e57be4889ea2_365932.jpg",
      "locality": "Basavanagudi",
      "areaName": "Banashankari",
      "costForTwo": "₹170 for two",
      "cuisines": [
          "Desserts",
          "Cafe",
          "Bakery",
          "Coffee",
          "Beverages",
          "Snacks"
      ],
      "avgRating": 4.7,
      "parentId": "570",
      "avgRatingString": "4.7",
      "totalRatingsString": "3.6K+",
      "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-03-26 23:00:00",
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
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹69"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "4.1",
              "ratingCount": "152"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/bangalore/krispy-kreme-doughnuts-and-coffee-basavanagudi-banashankari-rest365932",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "1452",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/8128f326-6b35-4f7a-974c-877ecf602826_1452.JPG",
      "locality": "Bull Temple Road",
      "areaName": "Basavanagudi",
      "costForTwo": "₹350 for two",
      "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
      ],
      "avgRating": 4.2,
      "parentId": "2",
      "avgRatingString": "4.2",
      "totalRatingsString": "19K+",
      "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-03-27 02:00:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                  "description": "Delivery!"
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
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/bangalore/subway-bull-temple-road-basavanagudi-rest1452",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "924311",
      "name": "Cheesecake & Co.",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/b1e64c1a-aca1-41c2-910c-e4226b429f43_924311.jpg",
      "locality": "Kathriguppe Road",
      "areaName": "Banashankari",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "Desserts",
          "Bakery",
          "Beverages"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "387417",
      "avgRatingString": "4.6",
      "totalRatingsString": "282",
      "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-03-27 00:00:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "newg.png",
                  "description": "Gourmet"
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
                              "description": "Gourmet",
                              "imageId": "newg.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-kathriguppe-road-banashankari-rest924311",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "952878",
      "name": "Salad Days",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/71b616a3-0b11-4c60-809a-f8a7f9764db5_952878.jpg",
      "locality": "80 Feet Road ",
      "areaName": " Banashankari",
      "costForTwo": "₹500 for two",
      "cuisines": [
          "Salads"
      ],
      "avgRating": 4.6,
      "parentId": "796",
      "avgRatingString": "4.6",
      "totalRatingsString": "764",
      "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-03-26 23:59:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "newg.png",
                  "description": "Gourmet"
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
                              "description": "Gourmet",
                              "imageId": "newg.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/bangalore/salad-days-80-feet-road-banashankari-rest952878",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
      "id": "681571",
      "name": "LeanCrust Pizza- ThinCrust Experts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/fae0bd31-cef6-4776-8a78-5f8f12d9f452_681571.jpg",
      "locality": "Azad Nagar",
      "areaName": "Mysore Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
          "Pizzas",
          "Italian",
          "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "11216",
      "avgRatingString": "4.4",
      "totalRatingsString": "189",
      "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2025-03-27 02:00:00",
          "opened": true
      },
      "badges": {
          "textExtendedBadges": [
              {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
              }
          ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {
                  "badgeObject": [
                      {
                          "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                          }
                      }
                  ]
              }
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
          "aggregatedRating": {
              "rating": "--"
          }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
      "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
  },
  "cta": {
      "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-azad-nagar-mysore-road-rest681571",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "440897",
                                                "name": "RNR Biryani - Taste of 1953",
                                                "cloudinaryImageId": "fur8m2ns9ikd4waybpoq",
                                                "locality": "Jayanagar",
                                                "areaName": "Jayanagar",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "South Indian",
                                                    "Kebabs",
                                                    "Beverages",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "11620",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "6.7K+",
                                                "sla": {
                                                    "deliveryTime": 36,
                                                    "lastMileTravel": 4.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "35-40 mins",
                                                    "lastMileTravelString": "4.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-27 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹199"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.4",
                                                        "ratingCount": "5.5K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/rnr-biryani-taste-of-1953-jayanagar-rest440897",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "792606",
                                                "name": "Shiv Sagar Signature",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/22/f3dc45f6-b538-4287-b84e-4ad9ae88eea9_792606.jpg",
                                                "locality": "Basavanagudi",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "South Indian"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "183310",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "1.1K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 1.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "1.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "bolt/bolt%206.png",
                                                            "description": "bolt!"
                                                        },
                                                        {
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                            "description": "pureveg"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "bolt!",
                                                                        "imageId": "bolt/bolt%206.png"
                                                                    }
                                                                },
                                                                {
                                                                    "attributes": {
                                                                        "description": "pureveg",
                                                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.1",
                                                        "ratingCount": "668"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/shiv-sagar-signature-basavanagudi-rest792606",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "971800",
                                                "name": "Easybites By Empire",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/12/029d39d3-910f-4f92-9bd7-69c0b2abee0c_971800.jpg",
                                                "locality": "Basavanagudi",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Snacks",
                                                    "Burgers"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "443171",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "325",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 2.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30-35 mins",
                                                    "lastMileTravelString": "2.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-27 03:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "isNewlyOnboarded": true,
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/easybites-by-empire-basavanagudi-rest971800",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "77949",
                                                "name": "Burger King",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/77f7d64b-c454-4f4f-aa90-db5b9c64e348_77949.jpg",
                                                "locality": "Gandhi Bazar",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "American"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "166",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "33K+",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "lastMileTravel": 2.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "2.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                            "description": "Delivery!"
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
                                                                        "description": "Delivery!",
                                                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/burger-king-gandhi-bazar-basavanagudi-rest77949",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "17301",
                                                "name": "KFC",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5bfe1062-dbda-4cea-962f-ecd60a1d1764_17301.JPG",
                                                "locality": "Basavanagudi",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Fast Food",
                                                    "Rolls & Wraps"
                                                ],
                                                "avgRating": 4.2,
                                                "parentId": "547",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "14K+",
                                                "sla": {
                                                    "deliveryTime": 21,
                                                    "lastMileTravel": 2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "2.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "bolt/bolt%206.png",
                                                            "description": "bolt!"
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
                                                                        "description": "bolt!",
                                                                        "imageId": "bolt/bolt%206.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.0",
                                                        "ratingCount": "6.1K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/kfc-basavanagudi-rest17301",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "1468",
                                                "name": "A2B - Adyar Ananda Bhavan",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/fb40dee9-b4c6-454e-8c79-dbdff33d7b36_1468.jpg",
                                                "locality": "Basavanagudi",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "South Indian",
                                                    "North Indian",
                                                    "Sweets",
                                                    "Chinese"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "22",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "16K+",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "2.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 22:30:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "bolt/bolt%206.png",
                                                            "description": "bolt!"
                                                        },
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                                                            "description": "Delivery!"
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
                                                                        "description": "bolt!",
                                                                        "imageId": "bolt/bolt%206.png"
                                                                    }
                                                                },
                                                                {
                                                                    "attributes": {
                                                                        "description": "Delivery!",
                                                                        "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹150 OFF",
                                                    "subHeader": "ABOVE ₹299",
                                                    "discountTag": "FLAT DEAL"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.2",
                                                        "ratingCount": "3.7K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-basavanagudi-rest1468",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "457522",
                                                "name": "McDonald's",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/fa0ef6c3-ddd4-4c9c-9d60-fd0386212669_457522.jpg",
                                                "locality": "Basavanagudi",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Beverages",
                                                    "Cafe",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "630",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "6.0K+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 2.1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "2.1 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-27 00:45:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                            "description": "Delivery!"
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
                                                                        "description": "Delivery!",
                                                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹199"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.2",
                                                        "ratingCount": "9.4K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/mcdonalds-basavanagudi-rest457522",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "556042",
                                                "name": "Baskin Robbins - Ice Cream Desserts",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/a8c0dd7f-abb2-44c5-9369-131265e9deeb_556042.jpg",
                                                "locality": "Banashankari",
                                                "areaName": "Banashankari",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Ice Cream",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "5588",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "673",
                                                "sla": {
                                                    "deliveryTime": 33,
                                                    "lastMileTravel": 4.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30-35 mins",
                                                    "lastMileTravelString": "4.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-27 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.3",
                                                        "ratingCount": "99"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-banashankari-rest556042",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "426730",
                                                "name": "Theobroma",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/6/9b6d6059-fe98-4362-b034-3aef55bc7d21_426730.jpg",
                                                "locality": "Lavelle Road",
                                                "areaName": "Ashok Nagar",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Desserts",
                                                    "Bakery",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.7,
                                                "parentId": "1040",
                                                "avgRatingString": "4.7",
                                                "totalRatingsString": "5.4K+",
                                                "sla": {
                                                    "deliveryTime": 36,
                                                    "lastMileTravel": 4.2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "35-40 mins",
                                                    "lastMileTravelString": "4.2 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                            "description": "Delivery!"
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
                                                                        "description": "Delivery!",
                                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹99"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.1",
                                                        "ratingCount": "432"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "427575",
                                                "name": "Corner House Ice Cream",
                                                "cloudinaryImageId": "buegmmozfa6tbzb9ehka",
                                                "locality": "Basavanagudi",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Ice Cream",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.7,
                                                "parentId": "65254",
                                                "avgRatingString": "4.7",
                                                "totalRatingsString": "6.3K+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 1.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 22:45:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "bolt/bolt%206.png",
                                                            "description": "bolt!"
                                                        },
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                            "description": "Delivery!"
                                                        },
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                                                            "description": "Delivery!"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "bolt!",
                                                                        "imageId": "bolt/bolt%206.png"
                                                                    }
                                                                },
                                                                {
                                                                    "attributes": {
                                                                        "description": "Delivery!",
                                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                    }
                                                                },
                                                                {
                                                                    "attributes": {
                                                                        "description": "Delivery!",
                                                                        "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.4",
                                                        "ratingCount": "6.0K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/corner-house-ice-cream-basavanagudi-rest427575",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "364221",
                                                "name": "Domino's Pizza",
                                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/b5248442-0889-43e4-8d85-61277560fead_364221.JPG",
                                                "locality": "5th Main Rd",
                                                "areaName": "Chamrajpet",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "Pastas",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.1,
                                                "parentId": "2456",
                                                "avgRatingString": "4.1",
                                                "totalRatingsString": "2.1K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                                            "description": "Delivery!"
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
                                                                        "description": "Delivery!",
                                                                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹89"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-5th-main-rd-chamrajpet-rest364221",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "22192",
                                                "name": "Srinivasa Brahmins Bakery",
                                                "cloudinaryImageId": "h8scdayrwunwig3rtiyq",
                                                "locality": "DR DVG Road",
                                                "areaName": "Srinivasa Brahmins Bakery",
                                                "costForTwo": "₹150 for two",
                                                "cuisines": [
                                                    "Street Food"
                                                ],
                                                "avgRating": 4.7,
                                                "veg": true,
                                                "parentId": "194937",
                                                "avgRatingString": "4.7",
                                                "totalRatingsString": "3.8K+",
                                                "sla": {
                                                    "deliveryTime": 24,
                                                    "lastMileTravel": 2.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "2.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 21:00:00",
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
                                                "aggregatedDiscountInfoV2": {},
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
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/srinivasa-brahmins-bakery-dr-dvg-road-srinivasa-brahmins-bakery-rest22192",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "757592",
                                                "name": "Haldirams Restaurant & Sweets",
                                                "cloudinaryImageId": "1abb89624b491497c8cff182d95ac457",
                                                "locality": "Basavanagudi",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "South Indian",
                                                    "Biryani",
                                                    "Chinese",
                                                    "Chaat",
                                                    "Thalis",
                                                    "Bakery",
                                                    "Sweets",
                                                    "Beverages",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "520514",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "1.3K+",
                                                "sla": {
                                                    "deliveryTime": 27,
                                                    "lastMileTravel": 2.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25-30 mins",
                                                    "lastMileTravelString": "2.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-27 01:00:00",
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
                                                "aggregatedDiscountInfoV2": {},
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
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.2",
                                                        "ratingCount": "2.3K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/haldirams-restaurant-and-sweets-basavanagudi-rest757592",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "69997",
                                                "name": "SLV Corner Restaurant",
                                                "cloudinaryImageId": "vpp0p2bjtxr3qnis6zug",
                                                "locality": "Basavanagudi",
                                                "areaName": "Basavanagudi",
                                                "costForTwo": "₹450 for two",
                                                "cuisines": [
                                                    "Chinese",
                                                    "South Indian",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.7,
                                                "parentId": "21456",
                                                "avgRatingString": "4.7",
                                                "totalRatingsString": "18K+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20-25 mins",
                                                    "lastMileTravelString": "2.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 22:30:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "bolt/bolt%206.png",
                                                            "description": "bolt!"
                                                        },
                                                        {
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                            "description": "pureveg"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "bolt!",
                                                                        "imageId": "bolt/bolt%206.png"
                                                                    }
                                                                },
                                                                {
                                                                    "attributes": {
                                                                        "description": "pureveg",
                                                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "4.2",
                                                        "ratingCount": "15K+"
                                                    },
                                                    "source": "GOOGLE",
                                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/slv-corner-restaurant-basavanagudi-rest69997",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                            "info": {
                                                "id": "85320",
                                                "name": "By 2 Coffee",
                                                "cloudinaryImageId": "pzyccoxkjhlvwtiv5hsq",
                                                "locality": "Chamrajpet",
                                                "areaName": "Chamarajpet",
                                                "costForTwo": "₹100 for two",
                                                "cuisines": [
                                                    "South Indian"
                                                ],
                                                "avgRating": 4.6,
                                                "veg": true,
                                                "parentId": "172",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "4.3K+",
                                                "sla": {
                                                    "deliveryTime": 17,
                                                    "lastMileTravel": 1.5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "15-20 mins",
                                                    "lastMileTravelString": "1.5 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2025-03-26 21:35:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "bolt/bolt%206.png",
                                                            "description": "bolt!"
                                                        },
                                                        {
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                            "description": "pureveg"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "bolt!",
                                                                        "imageId": "bolt/bolt%206.png"
                                                                    }
                                                                },
                                                                {
                                                                    "attributes": {
                                                                        "description": "pureveg",
                                                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {},
                                                "externalRatings": {
                                                    "aggregatedRating": {
                                                        "rating": "--"
                                                    }
                                                },
                                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                            },
                                            "analytics": {
                                                "context": "seo-data-bef9246c-2a68-4ea9-88fb-f214d5d93f81"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/city/bangalore/by-2-coffee-chamrajpet-chamarajpet-rest85320",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        }
                                    ];
const RestaurantCard = (props) => {
  const { info } = props.restoData;
  return (
    <div className="res-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info.cloudinaryImageId}  className="res-logo"></img>
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRating} Rating</h4>
      <h4>{info.costForTwo}</h4>
      <h4>{info.sla.deliveryTime} mins</h4>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search"><input type="text" className="search-box"></input><button className="search-button">Search</button></div>
      <div className="res-container">
        {
          restoList.map(data => (<RestaurantCard key={data.info.id} restoData={ data } />))
        }
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      Footer here
    </div>
  );
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
