import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v, createElement} from './sydneyLib/sydneyDom.js';

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'40px',
            minWidth:'40px',
            cursor:'pointer',
            borderRadius:'50%',
            
        }
    }
)

__SYD._p2 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p2','_flex'],'row'),
                    transform:'unset',
                    marginBottom:'20px',
                    alignItems:'flex-start'
                }
            })
        },
        [
            __c(
                'div',
                {
                    style:`min-height:fit-content;height:100%;width:${__p(['_p2','_flex'],'row') === 'row' ? '60%' : '100%'};background:unset;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px`
                },
                [
                    __c('h2',{class:'rainbow__text',style:`text-align:center;width:100%;font-size:${__p(['_p2','__font'],{2:'50px'})['2']}`},['INTRODUCING ...']),
                    __c('h1',{class:'rainbow_text',style:`font-family:sunrise;font-size:${__p(['_p2','__font'],{1:'70px'})['1']};`},['$GAYFISH']),
                    __c('h2',{class:'rainbow__text',style:`text-align:center;width:100%;font-size:${__p(['_p2','__font'],{2:'50px'})['2']}`},['The Most Fabulous meme coin  in the Ocean 🐟🌊']),
                    __SYD.about_text_p2(),
                    __SYD.page1Socials(),
                    __c(
                        'div',
                        {style:'display:flex;flex-direction:column;width:100%;row-gap:10px;align-items:center;text-align:left'},
                        [
                            __c(
                                'p',
                                {
                                    style:'font-size:22px;width:100%;min-width:fit-content;text-align:left'
                                },
                                [
                                    'CONTRACT--ADDRESS'
                                ]
                            ),
                            __c(
                                'div',
                                {
                                    style:`padding:50px 10px;width:100%;background:#015498;font-family:ubuntu;font-size:${__p(['_p2','_flex'],'row') === 'row' ? '20px' : '13px'};font-weight:900;text-align:center;cursor:pointer;border-radius:20px;box-shadow:2px 2px 5px #171717;color:#fff;`
                                },
                                [
                                    '-------------------------------------------'

                                ],
                                {
                                    events:{
                                        onclick:() =>{
                                            navigator.clipboard.writeText('-------------------------------------------')
                                            __v['c_a'].textContent = 'Contract Address Copied'

                                            const timer = setTimeout(() =>{
                                            __v['c_a'].textContent = '-------------------------------------------'
                                            clearTimeout(timer)
                                            },1500)
                                        }
                                    },
                                    type:'c_a'
                                }
                            )
                        ]
                    )
                ]
            ),
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p2','_flex'],'row') === 'row' ? '100vh' : '300px'};width:${__p(['_p2','_flex'],'row') === 'row' ? '40%' : '100%'};background-image:url("./assets/main_front.jpeg");background-size:contain;`//url("./assets/goatx.jpg")
                },[],
                {
                    genericStyle:[__p(['_p2','_flex'],'row') === 'row' ? 'bg_cover' : 'bg_fit'],
                }
            ),
        ],
        {
            createState:{
                stateName:'_p2',
                state:{_flex:'row',__font:{1:'70px',2:'50px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{_flex:'column-reverse',__font:{1:'30px',2:'20px'}}}],
                defState:{_flex:'row',__font:{1:'70px',2:'50px'}}
            }
        }
    )
}

__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 0;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap'
        },
        [
            __SYD.page1SocialBtn({contentSrc:'mm'}),
            __SYD.page1SocialBtn({contentSrc:'tel'}),
            __SYD.page1SocialBtn({contentSrc:'x'})
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}),
            class:'click'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}
__SYD.freeText_def = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:22px;width:50%;min-width:fit-content;text-align:center'
        },
        [
            text
        ]
    )
}
__SYD.freeText_def_small = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:16px;width:100%;text-align:center'
        },
        [
            text
        ]
    )
}

__SYD.about_text_p2= () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;text-align:left;font-weight:500;width:100%;text-align:center;'},[
        `Ever wondered what happens when a meme coin and a rainbow fish swim into the same pond? You get`,__c('span',{class:'rainbow__text'},[" $GAYFISH"]),` , the meme coin  that’s here to make waves and sprinkle a little glitter on the blockchain!
        One for all and all for one `,__c('span',{class:'rainbow__text'},[" $GAYFISH"]),` ,we gon take over the space,`
    ])
}
