import { rerenderDOM } from "./render";

let state = {

   index: {

      articles: [
      ],

      IndexHeaderChilds: [
         {
            elem: 'input',
            text: 'Введите название организации',
            hasFontawesome: true,
            logic: (url) => {
               getArticles(url)
            }
         },
         {
            elem: 'link',
            text: 'Проверить аккаунт',
            href: '/check'
         },
         {
            elem: 'error',
            text: ''
         }
      ],

      setError: function(text) {
         this.IndexHeaderChilds[2].text = text
      }
   },


   check: {

      articles: [
      ],

      CheckHeaderChilds: [
         {
            elem: 'input',
            text: 'Введите логин/имя пользователя',
            hasFontawesome: true,
            logic: (user, url) => {
               getHacks(user, url)
            }
         },
         {
            elem: 'input',
            text: 'Введите доменное имя ресурса',
            hasFontawesome: false,
            isDomenNameinpit: true,
            logic: (text) => {
               setDomainName(text)
            }
            
         },
         {
            elem: 'link',
            text: 'На главную',
            href: '/'
         },
         {
            elem: 'error',
            text: ''
         }
      ],

      setError: function(text) {
         this.CheckHeaderChilds[3].text = text
      },

      domainName: ''



   }


}

let setDomainName = (text) => {
   state.check.domainName = text
}



let getArticles = (url) => {

   state.index.articles.length = 0
   state.index.setError("")

   let addArticle = ( article ) => {
      state.index.articles.push( {header: article.Title, text: article.Description, image: article.LogoPath} )
   }

   // Так как в результате запроса получаются разные типы данных - необходимо копирование, казалось бы, одинаковых строчек кода
   if (url === '') {

      fetch( "https://haveibeenpwned.com/api/v2/breaches" )
      .then((response) => response.json())
      .then((response) => {
         
         response.forEach( (article, i) => {
            addArticle( response[i] )
         });
         
         rerenderDOM(state)
         
      })

   } else {

         if (url.includes(".")) {
            fetch( 'https://haveibeenpwned.com/api/breaches?domain=' + url )
               .then((response) => response.json())
               .then((response) => {
                  response.forEach( (article, i) => {
                     addArticle( response[i] )
                  })
                  rerenderDOM(state) 
               })
               .catch( () => {
                  state.index.setError("Данные не найдены")
                  rerenderDOM(state)
               } )
         } else {
            fetch( 'https://haveibeenpwned.com/api/v2/breach/' + url )
               .then((response) => response.json())
               .then((response) => {
                  addArticle( response )
                  rerenderDOM(state) 
               })
               .catch( () => {
                  state.index.setError("Данные не найдены")
                  rerenderDOM(state)
               } )
         }

   }
   

}




let getHacks = (user) => {

   let addArticle = ( article ) => {
      state.check.articles.push( {header: article.Title, text: article.Description, image: article.LogoPath} )
   }


   if (user === '') {
      return
   } else {

      state.check.articles.length = 0
      state.check.setError("")

      let url = state.check.domainName

      if (url !== '') {
         url = "?domain="+url
      }

      // Так как API стал работать стабильно, то можно не замарачиваться с тестовыми данными, а сделать как подразумевалось изначально
      fetch( 'https://haveibeenpwned.com/api/v2/breachedaccount/' + user + url)
      .then((response) => response.json())
      .then((response) => {

         response.forEach( (article, i) => {
            addArticle( response[i] )
         });
         rerenderDOM(state)  

      })
      .catch( () => {
         state.check.setError("Поздравляем! Нарушения не были найдены")
         rerenderDOM(state)
      } )
   }
   

}



export default state
