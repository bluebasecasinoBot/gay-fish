import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'#3788da86',
                    flexDirection:__p(['_p3','__flex'],'row'),
                    justifyContent:'flex-start',
                    padding:'20px 10px',
                    minHeight:'unset'
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'3rem') === '3rem' ? '40%' : '100%'};background-image:url("./assets/about-fish.jpeg");background-size:contain;border-radius:15px;`
                },
                [
                    
                ],
                {
                    genericStyle:['bg_cover'],
                }
            ),
            __c(
                'div',
                {
                    style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column'
                },
                [
                    __c('h1',{class:'rainbow__text',style:`font-family:sunrise;font-weight:900;font-weight:100;font-size:${__p(['_p3','__size'],'3rem')}`},['ABOUT']),
                    __SYD.about_text()
                ]
            )
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'3rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'2rem',__flex:'column'}}],
                defState:{__size:'3rem',__flex:'row'}
            }
        }
    )
}

__SYD.about_text = () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;max-width:500px;text-align:center;font-weight:100;'},[
        `Ever wondered what happens when a meme coin and a rainbow fish swim into the same pond? You get `,__c('span',{class:'rainbow__text'},[" $GAYFISH"]),`, the meme coin  that’s here to make waves and sprinkle a little glitter on the blockchain!
        One for all and all for one `,__c('span',{class:'rainbow__text'},[" $GAYFISH"]),`,we gon take over the space,`
    ])
}