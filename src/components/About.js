import { Outlet } from "react-router-dom";

const About = () =>{
    return(
        <div className="">
            {Outlet}
            <h1 className="text-3xl font-bold p-5 m-7 bg-yellow-200">About us ..</h1>
            <div className="text-2xl shadow-md p-5 m-10">This food ordering app is a convenient and user-friendly platform that allows users to browse through a wide range of restaurants, menus, and cuisines, all from the comfort of their own devices. With just a few taps, users can explore various options, read reviews, and make informed decisions about where to order their next meal. These apps often provide features such as personalized recommendations, easy customization of orders, and secure payment options, making the entire process seamless and hassle-free.</div>
            <div className="text-2xl shadow-md p-5 m-10">One of the key advantages of using a food ordering app is the ability to discover new dining experiences. These apps typically offer a diverse selection of eateries, ranging from local gems to popular chains, allowing users to explore different cuisines and flavors. Whether someone is craving pizza, sushi, or Indian cuisine, they can find a multitude of options right at their fingertips. Moreover, the app often provides detailed information about each restaurant, including ratings, reviews, and even photos of dishes, helping users make informed choices based on their preferences.</div>
            <div className="text-2xl shadow-md p-5 m-10">In addition to convenience and variety, food ordering apps also provide a range of features designed to enhance the overall user experience. For instance, many apps offer real-time order tracking, allowing users to monitor their delivery progress and estimate arrival times accurately. Some apps also provide loyalty programs, discounts, and exclusive offers to reward regular customers and foster customer loyalty. Additionally, the apps often have a user-friendly interface with intuitive navigation, making it easy for users to place orders, customize their meals, and even save their favorite dishes or restaurants for future reference.</div>
            <p className="text-2xl bg-slate-100 p-5 m-10">Overall, a food ordering app offers a convenient and efficient way for users to satisfy their cravings and explore culinary delights. With an extensive selection of restaurants, user-friendly features, and personalized recommendations, these apps have revolutionized the way people order food, making it easier than ever to enjoy a delicious meal without the hassle of cooking or dining out.</p>
        </div>
    )
}
export default About;