import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrosel:[],
    homeCards:[
      {
        imageRestaurant: "https://i.pinimg.com/564x/12/ec/ba/12ecba06bd861a65ec22b195b7dacf1d.jpg",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://media.istockphoto.com/photos/chef-preparing-food-for-the-restaurant-picture-id1277758677?k=20&m=1277758677&s=612x612&w=0&h=o329navK8pcTExMbkBdkVMhHWpyDdeXXvm-p0CHrcKE=",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://media.istockphoto.com/photos/two-diverse-entrepreneurs-have-a-team-meeting-in-their-stylish-coffee-picture-id1293174967?b=1&k=20&m=1293174967&s=170667a&w=0&h=mYaxfD3iRZ28liOyzS8PgRrysrVLISxJ4HgUHHv7jHg=",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
    ],
    sobreRestaurantes:[
      {
        restaurantName: "Classe da ponte Azul",
        distance:"São Paulo, Sul Nordeste",
        path: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      
      },
      {
        restaurantName: "Quimera salgada",
        distance:"São Paulo, Sorocaba",
        path: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      },
      {
        restaurantName: "Santo prato Quente",
        distance:"Santos, Santos",
        path: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

      },
      {
        restaurantName: "Fogo ardente",
        distance:"São Paulo, Guarulhos",
        path: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",


      },
      {
        restaurantName: "Comida servida",
        distance:"São Paulo, Santo Antonio",
        path: "https://media.istockphoto.com/photos/chef-preparing-food-for-the-restaurant-picture-id1277758677?k=20&m=1277758677&s=612x612&w=0&h=o329navK8pcTExMbkBdkVMhHWpyDdeXXvm-p0CHrcKE=",

      },
      {
        restaurantName: "Tofu Japones",
        distance:"São Paulo, Votorantim",
        path: "https://media.istockphoto.com/photos/empty-restaurant-interior-picture-id1288064106?b=1&k=20&m=1288064106&s=170667a&w=0&h=hLfSBeMPduZyld4su0c3ju-yMPGOouuk_3Gzv7S4Jwo=",

      },
    ],
    informacoesCards:[
      {
        restaurantName: "Nhoque de Batata com Molho",
        price:546,
        aboutCard:"01 - Nhoque de Batata com Molho + Carne Moída - 320g",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/nhoque-de-batata-carne-moida-5c927580602d8.png",
        pathRefeicoes:"https://gymchef.com.br/marmita-fit-nhoque-de-batata-com-molho-carne-moida"
      },
      {
        restaurantName: "Strogonoff de Carne",
        price:412,
        aboutCard:"02 - Strogonoff de Carne + Arroz Integral - 260g.",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/arroz-integral-strogonoff-de-carne-5f6cba796dc2b.png",
        pathRefeicoes:"https://gymchef.com.br/marmita-fitness-strogonoff-de-carne-arroz-integral"
      },
      {
        restaurantName: "Coxinha",
        price:421,
        aboutCard:"03 - Coxinha Fit de Batata Doce com Frango - Grande.",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/coxinha-de-batata-e-com-frango-assada-2-5f6b759324135.png",
        pathRefeicoes:"https://gymchef.com.br/coxinha-fit-de-batata-doce-com-frango-grande"
      },
      {
        restaurantName: "Empada Fit de Palmito",
        price:325,
        aboutCard:"04 - O salgado queridinho de muitos, agora de uma jeito mais leve, saudável e super super super saboroso! A nossa empada de palmito fit é ideal para os lanches da tarde e café da manhã, sua massa não é seca e tem um recheio super cremoso!",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/empada-integral-de-palmito-foto-01-2-5f6b75bd658a1.png",
        pathRefeicoes:"https://gymchef.com.br/empada-fit-de-palmito"
      },
      {
        restaurantName: "Sopa Fit de Feijão",
        price:112,
        aboutCard:"05 - A sopa de feijão é repleta de ferro, potássio, proteína e colabora com o emagrecimento por ter poucas calorias.",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/sopa-de-feijao-23-3-618db7ac555e4.webp",
        pathRefeicoes:"https://gymchef.com.br/sopa-fit-de-feijao"
      },
      {
        restaurantName: "Sopa Fit de Caldo Verde",
        price:874,
        aboutCard:"06 - Sopa feita utilizando Batata, couve manteiga, linguiça calabresa, cebola, azeite extra virgem e sal rosa.",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/caldo-verde-22-3-618db29d534ef.jpg",
        pathRefeicoes:"https://gymchef.com.br/sopa-fit-de-caldo-verde"
      },
      {
        restaurantName: "Marmita Low Carb",
        price:123,
        aboutCard:"07 - Marmita feita para quem quer consumir pouco carboidrato feito de carne seca.",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/nhoque-de-batata-roxa-polpetone-26-24-1-618daf335f14f.webp",
        pathRefeicoes:"https://gymchef.com.br/kit-marmita-low-carb-10-dias"
      },
      {
        restaurantName: "Bolo Integral de Laranja",
        price:12,
        aboutCard:"08 - Bolo macio, feito com ingredientes selecionados e na medida certa para aquele lanche delicioso!",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/bolo-de-laranja-5f6b7499efdb9.png",
        pathRefeicoes:"https://gymchef.com.br/doce-fitness-bolo-integral-de-laranja"
      },
      {
        restaurantName: "Bolo de Prestígio Fit",
        price:364,
        aboutCard:"09 - O Bolo de Prestígio é feito com ingredientes selecionados, entre eles coco fresco, óleo de coco, cacau e chocolate 70%.",
        path: "https://cdn.octoshop.com.br/lojas/gymchef/uploads_produto/e-funcional-de-prestigiopng-576ac71067c35.png",
        pathRefeicoes:"https://gymchef.com.br/doce-fit-doce-funcional-de-prestigio"
      },  
    ],
    aboutCard:[
      {
        imageRestaurant: "https://i.pinimg.com/564x/12/ec/ba/12ecba06bd861a65ec22b195b7dacf1d.jpg",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://media.istockphoto.com/photos/chef-preparing-food-for-the-restaurant-picture-id1277758677?k=20&m=1277758677&s=612x612&w=0&h=o329navK8pcTExMbkBdkVMhHWpyDdeXXvm-p0CHrcKE=",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://media.istockphoto.com/photos/two-diverse-entrepreneurs-have-a-team-meeting-in-their-stylish-coffee-picture-id1293174967?b=1&k=20&m=1293174967&s=170667a&w=0&h=mYaxfD3iRZ28liOyzS8PgRrysrVLISxJ4HgUHHv7jHg=",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      {
        imageRestaurant: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        pathRestaurant:"/restaurants",
        imageComidas: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        pathComidas:"/food"
      },
      
    ],
  },
  getters: {
    searchCards: (state) => state.informacoesCards,
    searchRestaurant: (state) => state.sobreRestaurantes,
    searchHomeCards: (state) => state.homeCards,
    searchCarousel: (state) => state.carrosel,
    aboutSearch: (state) => state.aboutCard,
  },
  mutations: {
    SET_CAROUSEL(state, payload){
      state.carrosel = payload
    }
  },
  actions: {
    fetchCarousel({commit}){
      axios.get("https://foodbukka.herokuapp.com/api/v1/menu")
      .then(res=>{
        const payload = res.data
        console.log(payload + "aaaa")
        commit("SET_CAROUSEL", payload)
      })
      .catch(err=>{console.log(err)})
    }
  },
})
