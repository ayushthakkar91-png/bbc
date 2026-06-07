export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Veg. Starters",
    items: [
      { name: "PLAIN & SPICY POPPADUM’S", price: "£ 1.95" },
      { name: "POTATO CHIPS (FRENCH FRIES)", desc: "Thin & crispy potato chips", price: "£ 4.95" },
      { name: "2 ONION BHAJI (E)", desc: "Onion slices mixed with homemade spices and deep fried (Two in a portion)", price: "£ 5.95" },
      { name: "2 VEG SAMOSA (G)", desc: "Pastry parcels freshly made, filled with spiced vegetable and deep fried (Two in a portion)", price: "£ 5.95" },
      { name: "MIX VEG PAKORA", desc: "Vegetables mixed with fresh ginger, garlic, coriander and deep fried", price: "£ 5.95" },
      { name: "CHILLI CHIPS", desc: "Stir fried potato chips in hot spiced sauce", price: "£ 6.45" },
      { name: "CHILLI MUSHROOM", desc: "Fried mushroom cooked in a spiced sauce with onion, pepper, and chili", price: "£ 6.95" },
      { name: "CHILLI PANEER", desc: "Cubes of homemade cottage cheeses cooked in tomatoes sauce, onions, and peppers", price: "£ 9.95" },
      { name: "SPIRAL POTATO", desc: "A spiral potato is a skewer of spiral-cut potato, deep-fried to crispy perfection, seasoned, and served hot.", price: "£ 5.95" },
      { name: "VEGETABLE MOMO", desc: "Hand-made dumplings filled with mix vegetables, onions, ginger, and garlic, served with a chutney", price: "£ 9.95" },
      { name: "PANEER SHASHLIK D", desc: "Homemade cottage cheese grilled with slice of onion, capsicum and tomato.", price: "£ 10.95" }
    ]
  },
  {
    category: "Non-Veg. Starters",
    items: [
      { name: "CHICKEN TIKKA", desc: "Diced chicken breast marinated in yogurt, herbs and spices, cooked in clay oven.", price: "£ 9.95" },
      { name: "CHILLI CHICKEN", desc: "Battered chicken chunks fired and cooked in a spiced sauce with onion, pepper, and chili", price: "£ 9.95" },
      { name: "CHICKEN LOLLIPOP", desc: "Spiced chicken niblet deep fried with secret sauce", price: "£ 6.95" },
      { name: "CHICKEN PAKORA", desc: "Slice chicken marinated with spices and fresh coriander and deep fried", price: "£ 6.45" },
      { name: "LAMB TIKKA", desc: "Cubes of lamb marinated in yogurt, herbs, and medium hot spices.", price: "£ 10.95" },
      { name: "LAMB SHISH KEBAB", desc: "Lean minced lamb blend with ginger, garlic, green chilli, and mixture of spices wrapped around skewers and grilled.", price: "£ 9.95" },
      { name: "LAMB CHOPS", desc: "Lamb chop cooked in tandoor mixed with ginger, garlic, green chilli, and mixture of spices", price: "£ 12.95" },
      { name: "LAMB SAMOSA (2pcs)", desc: "Pastry parcels freshly made, filled with minced lamb and deep fried (Two in a portion).", price: "£ 5.95" },
      { name: "CHICKEN MOMO (G)", desc: "Hand-made dumplings filled with mince chicken, onions, ginger, and garlic, served with a chutney", price: "£ 9.95" }
    ]
  },
  {
    category: "Tandoori Main Course",
    items: [
      { name: "TROUT FISH (S)", desc: "Trout fish marinated in northern spices and gently cooked in clay oven, served whole fish with bones.", price: "£ 13.95" },
      { name: "KING PRAWN TANDOORI (D,S)", desc: "Succulent king prawns marinated in mild northern spices and gently cooked in clay oven.", price: "£ 15.95" },
      { name: "TANDOORI MIXED GRILLED (D,S)", desc: "A selection of prawn, lamb, and chicken, marinated in herbs and spices. (Serves for two)", price: "£ 15.95" },
      { name: "TANDOORI SALMON (D)", desc: "Succulent salmon marinated in mild northern spices and gently cooked in clay oven.", price: "£ 13.95" },
      { name: "TANDOORI CHICKEN (D) Half", desc: "Chicken on the bone, prepared with mild tandoori spices and grilled in clay oven.", price: "£ 9.95" },
      { name: "TANDOORI CHICKEN (D) Full", desc: "Chicken on the bone, prepared with mild tandoori spices and grilled in clay oven.", price: "£ 15.95" },
      { name: "TANDOORI GREEN CHILLI CHICKEN (D) Half", desc: "Chicken on the bone, prepared with tandoori spices, green chili, mint and coriander and grilled in clay oven.", price: "£ 9.95" },
      { name: "TANDOORI GREEN CHILLI CHICKEN (D) Full", desc: "mint and coriander and grilled in clay oven.", price: "£ 15.95" },
      { name: "BOMBAY SPECIAL PLATTER (D,S)", desc: "Choose any 5 items from following: (Chicken Tikka, Lamb Tikka, Paneer Tikka, Tandori Chicken, Lamb Chops, Lamb Shish Kebab)", price: "£ 19.95" },
      { name: "CHICKEN SHASHLIK (D)", desc: "Marinated chicken cubes grilled with slice of onion, capsicum and tomato.", price: "£ 10.95" }
    ]
  },
  {
    category: "Seafood Main Dishes",
    items: [
      { name: "KING PRAWN MASALA (N,D,S)", desc: "Marinated king prawn, grilled in clay oven, cooked in masala sauce.", price: "£ 14.95" },
      { name: "KING PRAWN BHUNA (D,S)", desc: "King prawn sautéed with aromatic spices, cooked with herbs & fresh tomatoes.", price: "£ 14.95" },
      { name: "KING PRAWN SAAG (D,S)", desc: "King prawn cooked with fresh spinach", price: "£ 14.95" },
      { name: "KING PRAWN PATHIYA (D,S)", desc: "Marinated king prawn cooked in a delicious sweet & sour sauce with curry leaves.", price: "£ 14.95" },
      { name: "KING PRAWN DHANSAK (D,S)", desc: "King prawn cooked with lentils in a delicious hot, sweet & sour sauce", price: "£ 14.95" },
      { name: "KING PRAWN JALFREZI (D,S)", desc: "Marinated king prawn grilled in clay oven & cooked in tomato sauce with tamarind, curry leaves, mixed peppers, green chillies, and hints of chopped garlic.", price: "£ 14.95" },
      { name: "MACHLI MASALA (D,G,S,N)", desc: "Tender fillet of fish deep fried & cooked together with traditional masala sauce.", price: "£ 13.95" },
      { name: "MADRAS FISH CURRY(D,G,S)", desc: "Chunks of boneless cod fish cooked with spicy tamarind sauce, garnished with garlic and curry leaves.", price: "£ 13.95" }
    ]
  },
  {
    category: "Chicken Main Dishes",
    items: [
      { name: "CHICKEN BALTI (D,P)", desc: "Tender thigh chicken cooked with onions, fresh tomatoes with special Balti sauce.", price: "£ 12.95" },
      { name: "CHICKEN SAAG (D)", desc: "Tender thigh chicken breast cooked with fresh spinach leaves.", price: "£ 12.95" },
      { name: "CHICKEN DHANSAK (D)", desc: "Tandoori chicken breast cooked with yellow lentils in a sweet and sour sauce.", price: "£ 12.95" },
      { name: "BOMBAY CHICKEN (D, P,M))", desc: "Must try - suitable for spicy curry lovers Cubes of supreme breast chicken cooked with gravy of ginger, garlic, coriander, onions, green chilli, and fresh tomatoes.", price: "£ 12.95" },
      { name: "CHICKEN MADHURAI (D)", desc: "Supreme breast of chicken marinated in herbs and spices, grilled in clay oven and cooked together in a rich tomato sauce and green chilli.", price: "£ 12.95" },
      { name: "CHICKEN MADRAS (D)", desc: "Tandoori chicken breast cooked in a gravy sauce with onions, green chilli, and peppers.", price: "£ 12.95" },
      { name: "CHICKEN JALFREZI (D)", desc: "Tandoori chicken breast cooked with lots of chopped garlic.", price: "£ 12.95" },
      { name: "CHICKEN KORMA (D,N)", desc: "Tandoor chicken tikka breast cooked in gravy sauce and cashew nuts.", price: "£ 12.95" },
      { name: "CHICKEN TIKKA MASALA (D,N)", desc: "Marinated chicken breast cooked in clay oven and served in a rich masala sauce.", price: "£ 12.95" },
      { name: "BUTTER CHICKEN (D,N)", desc: "Grilled chicken breast cooked in mild creamy sauce with cashew nuts.", price: "£ 12.95" },
      { name: "CHICKEN GREEN MASALA (D,N)", desc: "Tender thigh chicken served in a rich green masala sauce containing mint, coriander ,green pepper and pistachio", price: "£ 12.95" },
      { name: "CHICKEN BHUNA (D)", desc: "Tender thigh chicken cooked in tomato, onion, capsicum & homemade masala.", price: "£ 12.95" },
      { name: "CHICKEN VINDALOO (D)", desc: "(Very hot) - tandoori chicken breast cooked with potato, capsicum, onion, and curry leaves.", price: "£ 12.95" },
      { name: "KARAHI CHICKEN (D)", desc: "Tender chicken cooked with capsicum and onion in karahi sauce.", price: "£ 12.95" },
      { name: "CHEF SPECIAL CHICKEN CURRY (D,SY,N)", desc: "Rich and flavorful chicken curry with special chef sauce/ twist with soya beans.", price: "£ 12.95" },
      { name: "CHEESY CHICKEN CURRY (D)", desc: "Fried chicken breast served with cheese and creamy sauce.", price: "£ 12.95" },
      { name: "CHICKEN ROGAN (D)", desc: "Tandoori chicken breast cooked in a traditional Rogan sauce with lots of fresh tomatoes.", price: "£ 12.95" }
    ]
  },
  {
    category: "Lamb Main Dishes",
    items: [
      { name: "LAMB KORMA (N, D)", desc: "Tender cubes of lamb cooked in classic korma sauce.", price: "£ 13.95" },
      { name: "LAMB TIKKA MASALA (N, D)", desc: "Lamb cooked with onions and capsicum in a rich masala sauce.", price: "£ 13.95" },
      { name: "LAMB PASANDA (N, D)", desc: "Marinated lamb slices, cooked in sweet and sour creamy sauce with cashew nuts.", price: "£ 13.95" },
      { name: "LAMB BHUNA", desc: "Tender lamb cooked in thick tomato sauce, onion, and ginger.", price: "£ 13.95" },
      { name: "LAMB SAAG", desc: "Tender lamb gently cooked with fresh spinach leaves.", price: "£ 13.95" },
      { name: "LAMB ROGAN JOSH", desc: "Tender lamb in a traditional Rogan Josh sauce with lots of fresh tomatoes.", price: "£ 13.95" },
      { name: "LAMB MADRAS", desc: "Tender lamb cooked with onions, garlic, green chilli and tomatoes.", price: "£ 13.95" },
      { name: "LAMB VINDALOO (P)", desc: "Tender lamb cooked with potato, capsicum, onion, curry leaves, fresh tomato, and vindaloo sauce.", price: "£ 13.95" },
      { name: "LAMB MADURAI", desc: "Slices of spicy tandoori lamb cooked in spicy tomato sauce with fresh chilli, green pepper, onion, and curry leaves.", price: "£ 13.95" },
      { name: "LAMB DHANSAK", desc: "Tender lamb cooked with yellow lentils in a sweet and sour sauce.", price: "£ 13.95" },
      { name: "CHEF SPECIAL LAMB CURRY (N,SY)", desc: "Rich and flavorful lamb curry with special chef sauce/twist with soya beans.", price: "£ 13.95" },
      { name: "LAMB GREEN MASALA (N, D)", desc: "Tender lamb served in a rich green masala sauce containing mint, coriander, green pepper, and pistachio.", price: "£ 13.95" }
    ]
  },
  {
    category: "Vegetarian Main",
    items: [
      { name: "SHAHI TANDOORI PANEER (D)", desc: "Homemade cottage cheese, marinated with spices, tenderly cooked with onion, tomato and capsicum in clay oven and mix with our own made sauce.", price: "£ 10.95" },
      { name: "PANEER MASALA (D)", desc: "Cubes of homemade cottage cheese cooked with onions, capsicum in rich masala sauce.", price: "£ 10.95" },
      { name: "MUTTER PANEER (D)", desc: "Cubes of homemade cottage cheese cooked with fresh green peas, onion & tomato sauce.", price: "£ 10.95" },
      { name: "PALAK PANEER (D)", desc: "Cubes of homemade cottage cheeses cooked with fresh green spinach and spices.", price: "£ 10.95" },
      { name: "MIX VEG CURRY", desc: "Fresh mixed vegetables cooked with our own spices", price: "£ 10.95" },
      { name: "MIX VEG KORMA (V)", desc: "Combination of fresh seasonal vegetables cooked in mild creamy sauce with cashew nuts.", price: "£ 10.95" },
      { name: "BOMBAY PANEER (D)", desc: "Paneer cubes cooked with grarey of ginger, garlic, coriander, onions green chill and fresh tomatos.", price: "£ 10.95" },
      { name: "PANEER KARAHI (D)", desc: "Tender paneer cubes cooked with capsicums and onion in karahi sauce.", price: "£ 10.95" },
      { name: "PANEER BHURJI (D)", desc: "Grated paneer cooked to perfetion in a rich onion-tomato, ginger garlic gravy bursting with aromatic spice.", price: "£ 10.95" },
      { name: "PANEER GREEN MASALA (D,N)", desc: "Tender paneer cubes in a rich green masala sauce. contains with mint, coriander, green peper and cashew.", price: "£ 10.95" }
    ]
  },
  {
    category: "Vegetarian Side Dishes",
    items: [
      { name: "BOMBAY ALOO (V)", desc: "Slices of potatoes cooked with butter & Bombay chat masala.", price: "£ 7.95" },
      { name: "SAAG ALOO (V)", desc: "Slices of potatoes cooked with fresh spinach leaves.", price: "£ 7.95" },
      { name: "PALAK (V)", desc: "Fresh spinach leaves cooked with cumin, garlic & ginger.", price: "£ 7.95" },
      { name: "GOBI SABJI (V)", desc: "Fresh cauliflower cooked with tomato, ginger & garlic.", price: "£ 7.95" },
      { name: "ALOO GOBI (V)", desc: "Potatoes & cauliflower cooked together with slices of tomatoes, green peppers & onions.", price: "£ 7.95" },
      { name: "ZEERA ALOO (V)", desc: "Cumin & coriander flavoured dry sauteed potatoes.", price: "£ 7.95" },
      { name: "SHAHI BAINGAN (V)", desc: "Fresh aubergine cooked with onion, garlic & ginger.", price: "£ 7.95" },
      { name: "BHINDI SABJI (V)", desc: "Fresh okra cooked with tomato, cumin, mustard seeds, sauteed with ginger & garlic.", price: "£ 7.95" },
      { name: "BOMBAY MUSHROOM (V)", desc: "Fresh mushrooms cooked with onion, tomatoes, green peppers & light spices.", price: "£ 7.95" },
      { name: "KHAYBARI CHANNA MASALA (V)", desc: "Chickpeas cooked with fresh tomatoes, onion, green pepper, ginger & our special Channa masala.", price: "£ 7.95" },
      { name: "KALI DAAL (V)", desc: "Black lentils cooked with ginger, garlic, cumin seeds in a typical Indian style.", price: "£ 7.95" },
      { name: "PALAK DAAL (V)", desc: "Cumin flavoured mix lentils cooked with garlic, ginger & spinach leaves.", price: "£ 7.95" },
      { name: "TARKA DAAL (V)", desc: "Assorted lentils cooked with butter & fried garlic.", price: "£ 7.95" }
    ]
  },
  {
    category: "Biryanis",
    items: [
      { name: "VEGETABLE BIRYANI (D)", desc: "Fresh mixed vegetables cooked with basmati rice.", price: "£ 12.95" },
      { name: "LAMB BIRYANI (D)", desc: "Tender lamb cooked with basmati rice.", price: "£ 14.95" },
      { name: "CHICKEN DUM BIRYANI (D)", desc: "A style of Biryani from Hyderabad, India. Originating in the kitchen of Nizam of Hyderabad serve with cucumber raitha. Base ingredients are basmati rice, chicken, yogurt (dahi), fried onions, & ghee. Spices include cinnamon, cloves, cardamom, bay leaves, cumin powder, lemon, mint, mace flower & star anise.", price: "£ 12.95" },
      { name: "KING PRAWN BIRYANI (D,S)", desc: "Spiced prawn cooked with basmati rice.", price: "£ 15.95" },
      { name: "MIXED BIRYANI (D,S)", desc: "Basmati rice mixed with chicken, lamb, and king prawn.", price: "£ 14.95" },
      { name: "CHICKEN TIKKA BIRYANI (D)", desc: "Chicken breast cooked with basmati rice.", price: "£ 13.95" }
    ]
  },
  {
    category: "Rice",
    items: [
      { name: "PILAU RICE (Small) D", desc: "Basmati rice cooked in herbs.", price: "£ 4.45" },
      { name: "PILAU RICE (Large) D", desc: "Basmati rice cooked in herbs.", price: "£ 5.95" },
      { name: "PLAIN RICE (Small) V", desc: "Steamed basmati rice.", price: "£ 3.95" },
      { name: "PLAIN RICE (Large) V", desc: "Steamed basmati rice.", price: "£ 5.75" },
      { name: "SPECIAL MUSHROOM RICE (Small) D", desc: "Pilau rice fried with mushroom.", price: "£ 4.55" },
      { name: "SPECIAL MUSHROOM RICE (Large) D", desc: "Pilau rice fried with mushroom.", price: "£ 6.15" },
      { name: "PEAS RICE (Small) D", desc: "Steamed basmati rice fried with green peas.", price: "£ 4.25" },
      { name: "PEAS RICE (Large) D", desc: "Steamed basmati rice fried with green peas.", price: "£ 5.75" },
      { name: "EGG FRIED RICE (D,E)", desc: "Basmati rice cooked in herbs with scrambled eggs & green peas.", price: "£ 6.95" },
      { name: "JEERA RICE (Small)", desc: "Basmati rice cooked with cumin seeds.", price: "£ 4.45" },
      { name: "JEERA RICE (Large)", desc: "Basmati rice cooked with cumin seeds.", price: "£ 5.95" }
    ]
  },
  {
    category: "Breads",
    items: [
      { name: "PLAIN NAAN (D,G,E)", desc: "Whole wheat bread freshly baked in our clay oven.", price: "£ 3.15" },
      { name: "GARLIC NAAN (D,G,E)", desc: "Naan bread coated with freshly chopped garlic.", price: "£ 3.55" },
      { name: "CHILLI NAAN (D,G,E)", desc: "Naan bread coated with freshly chopped chili.", price: "£ 3.55" },
      { name: "PESHWARI NAAN (D,G,E,N)", desc: "Naan bread stuffed with sultanas, coconut & cashew nuts.", price: "£ 4.45" },
      { name: "CHESSY NAAN (D,G,E)", desc: "Whole wheat bread freshly baked with cheese in clay oven.", price: "£ 4.45" },
      { name: "KULCHA NAAN (D,G,E)", desc: "Naan bread stuffed with mild spicy vegetables.", price: "£ 4.45" },
      { name: "KEEMA NAAN (D,G,E)", desc: "Naan bread stuffed with spiced lamb mincemeat.", price: "£ 4.45" },
      { name: "TANDOORI ROTI (G)", desc: "Whole wheat bread freshly baked in tandoor.", price: "£ 2.95" },
      { name: "LACCHA PARATHA (D,G)", desc: "Whole wheat dough stretched, brushed with butter & baked in tandoor.", price: "£ 4.45" },
      { name: "CHILLI GARLIC NAAN (D,G,E)", desc: "Naan bread coated with freshly chopped chili & garlic.", price: "£ 3.75" }
    ]
  },
  {
    category: "Salad/Yogurt",
    items: [
      { name: "SPECIAL GREEN SALAD", desc: "Fresh tomatoes, crunchy cucumbers, crisp red onions, green peppers, romaine lettuce and savoury olives.", price: "£ 5.25" },
      { name: "RAITA (D)", price: "£ 2.95" },
      { name: "PLAIN YOGURT (D)", price: "£ 1.95" },
      { name: "MINT YOGURT (D)", price: "£ 1.75" },
      { name: "MIXED PICKLE", price: "£ 1.75" },
      { name: "LIME PICKLE", price: "£ 1.75" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "GULAB JAMUN", price: "£ 3.95" },
      { name: "KULFI (D)", price: "£ 4.45" },
      { name: "ICE CREAM (D)", desc: "Chocolate, Vanilla, Strawberry", price: "£ 4.95" }
    ]
  },
  {
    category: "Indo - Chinese Soup",
    items: [
      { name: "HOT & SOUR SOUP", desc: "A tangy & spicy broth filled with vegetables & deep flavour of soya & chilli.", price: "£ 4.95" },
      { name: "MANCHOW SOUP", desc: "A spicy indo chinese soup featuring crispy fried noodles, mixed vegetables & a savory blend of soya sauce & spices.", price: "£ 5.95" },
      { name: "MANCHURIAN SOUP", desc: "A broth with vegetable balls simmered in a (tangy & spicy sauce) with garlic & soya sauce.", price: "£ 5.95" },
      { name: "CHICKEN SOUP", desc: "A tangy & spicy broth filled with chicken & deep flavour of soya & chilli.", price: "£ 4.95" },
      { name: "CHICKEN MANGHOW SOUP", desc: "A spicy indo chinese soup featuring crispy fried noodles, mixed chicken & a savory blend of soya sauce & spices.", price: "£ 5.95" }
    ]
  },
  {
    category: "Indo - Chinese Noodles",
    items: [
      { name: "MANCHURIAN NOODLES", desc: "A spicy indo chinese dish combining stir- fried noodles & vegetable balls with a tangy, savoury sauce.", price: "£ 8.95" },
      { name: "MUSHROOM NOODLES", desc: "Stir-fried noodles tossed with a medley mushroom & flavourful seasonings.", price: "£ 8.95" },
      { name: "PANEER NOODLES", desc: "Stir-fried noodles tossed with flavourful paneer cubes vegetables & savoury sauces.", price: "£ 9.95" },
      { name: "VEG HAKKA NOODLES", desc: "A special noodles made with vegetables like cabbage, carrot peppers & onion with soya sauce & other spices.", price: "£ 8.95" },
      { name: "CHILLI GARLIC NOODLES", desc: "Stir-fried noodles tossed with a verity of vegetables garlic & chilli sauce for bold flavour.", price: "£ 8.95" },
      { name: "CHICKEN SCHEZWAN NOODLES", desc: "A special noodles made with chicken, cabbage, carrot, peppers and onions with schezwan, soya & chilli sauce.", price: "£ 9.95" },
      { name: "CHICKEN NOODLES", desc: "A special noodles made with chicken & vegetable with soya and chilli sauce.", price: "£ 9.95" },
      { name: "KING PRAWN NOODLES", desc: "Stir - fried noodles with prawn, vegetables, soya sauce, garlic and chilli sauce.", price: "£ 12.95" }
    ]
  },
  {
    category: "Indo - Chinese Mains",
    items: [
      { name: "VEGETABLE MANGHURIAN (GRAVY)", desc: "Crispy vegetable balls tossed in spiced gravy with soya sauce, garlic & chilli.", price: "£ 9.95" },
      { name: "VEGETABLE MANCHURIAN (DRY)", desc: "Crispy vegetable balls tossed in chinese sauce, garlic, chilli & soya sauce served without gravy.", price: "£ 8.95" },
      { name: "PANEER MANCHURIAN (DRY)", desc: "Crispy paneer cubes & manchurian balls stir-fried in spicy indo-chinese sauce with garlic, soya sauce & chilli serve without gravy.", price: "£ 9.95" },
      { name: "PANEER MANCHURIAN (GRAVY)", desc: "Crispy paneer cubes & manchurian balls stir-fried in indo-chinese sauce with garlic, soya sauce & chilli.", price: "£ 9.95" },
      { name: "CHILLI GARLIC MANCHURIAN", desc: "Crispy manchurian balls coated in a fried indo-chinese chilli garlic sauce with bold flavours of soya, ginger & spices.", price: "£ 8.95" },
      { name: "SCHEZWAN PANEER", desc: "Schezwan Paneer is a spicy and flavorful Indo-Chinese dish featuring soft paneer cubes tossed in a tangy, fiery Schezwan sauce.", price: "£ 10.95" }
    ]
  },
  {
    category: "Indo - Chinese Rice",
    items: [
      { name: "VEG FRIED RICE (Small)", desc: "Steamed rice stir fried with assorted vegetables seasoned with soya sauce & other spices.", price: "£ 4.95" },
      { name: "VEG FRIED RICE (Large)", desc: "Steamed rice stir fried with assorted vegetables seasoned with soya sauce & other spices.", price: "£ 6.95" },
      { name: "PANEER RICE (Small)", desc: "Flavourful rice dish with sauted paneer cubes & vegetables.", price: "£ 4.95" },
      { name: "PANEER RICE (Large)", desc: "Flavourful rice dish with sauted paneer cubes & vegetables.", price: "£ 6.95" },
      { name: "VEG SCHEZWAN RICE (Small)", desc: "Steamed rice mixed with vegetables & schezwan sauce.", price: "£ 4.95" },
      { name: "VEG SCHEZWAN RICE (Large)", desc: "Steamed rice mixed with vegetables & schezwan sauce.", price: "£ 6.95" },
      { name: "CHINESE BHEL", desc: "Crispy fried noodles tossed with fresh vegetables & a tangy, spicy sauce.", price: "£ 7.95" }
    ]
  }
];
