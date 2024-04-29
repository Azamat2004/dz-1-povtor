import React from 'react'
import classes from './Third.module.css'


const ThirdPost = () => {

    return (
        <div>
            <div className={classes.img}>
                <img src="./img/9999.jpg" alt="" />
            </div>

          

            <div className={classes.designcontainer}>
                <div className={classes.container}>
                    <h1>Добро пожаловать в библиотеку </h1>
                    <div className={classes.profile}>
                        <img src="./img/411.jpg" alt="" />
                        <div className={classes.profile_name}>
                            <h2>Александр Пушкин</h2>
                            <h5>Beekeeper</h5>
                        </div>
                        <div className={classes.photoshop}>
                            <h2>Photoshop</h2>
                            <h5>Categories</h5>
                        </div>
                        <div className={classes.reviews}>
                            <h2>25 Reviews</h2>
                            <h5>Reviews</h5>
                        </div>

                       
                    </div>
                    <div className={classes.uxui}>
                        <img src="./img/414.jpg" alt="" />
                        <hr />
                        <img src="./img/5555.jpg" alt="" />
                        <hr />
                        <img src="./img/2222.jpg" alt="" />
                        <hr />
                        <img src="./img/3333.jpg" alt="" />
                        <hr />
                        <img src="./img/4444.jpg" alt="" />
                        <hr />
                        <img src="./img/6666.jpg" alt="" />
                        <hr />
                        <img src="./img/7777.jpg" alt="" />
                        </div>
                </div>
                <div className={classes.second_container}>
                    <h1>Categories</h1>
                    <div className={classes.line}></div>

                    <div  className={classes.web_design}> <h3>страна: Кыргызстан (9)</h3></div>
                    <div  className={classes.web_design}><h3 >город: Ош (3)</h3></div>
                    <div  className={classes.web_design}><h3 > (23)</h3></div>
                    <div  className={classes.web_design}><h3 >Graphic Design (5)</h3></div>
                    <div  className={classes.web_design}><h3 >UX-UI Design (7)</h3></div>
                    <div  className={classes.web_design}><h3 >Print Design (2)</h3></div>
                   <div  className={classes.web_design}> <h3 >Logo- Design (5)</h3></div>
                    <div className={classes.browse}>
                        <h1>Краткое Биография</h1>
                        <div className={classes.lini}></div>

                        <p >Александр Сергеевич Пушкин (1799-1837 гг.) – великий русский поэт, прозаик, драматург. Автор бессмертных произведений в стихах и прозе: романов “Евгений Онегин”, “Дубровский”, известных поэм “Руслан и Людмила”, “Кавказский пленник”, повести “Пиковая дама” и многих других, а также сказок для детей </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ThirdPost