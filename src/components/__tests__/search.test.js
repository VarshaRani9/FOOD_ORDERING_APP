import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store"
import {StaticRouter } from "react-router-dom/server"
import {RESTAURANT_DATA} from '../../mocks/data'

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{ return Promise.resolve(RESTAURANT_DATA)
        }
    })
})

test("Search results on homepage",()=>{
    // Load Body
    const body = render(
    <StaticRouter>
    <Provider store={store}><Body/></Provider>
    </StaticRouter>
    )
    console.log(body);
    // const search = body.getByTestId('search');
}) 

test("Shimmer on homepage",()=>{
    // Load Body
    const body = render(
    <StaticRouter>
    <Provider store={store}><Body/></Provider>
    </StaticRouter>
    )
    const shimmer = body.getByTestId('shimmer');
    expect(shimmer.children.length).toBe(20);
}) 

test("Restaurants on homepage",async ()=>{
    const body = render(
    <StaticRouter>
    <Provider store={store}><Body/></Provider>
    </StaticRouter>
    )

    await waitFor(()=>expect(body.getByTestId('search')))

    const resList = body.getByTestId('res-list');
    expect(resList.children.length).toBe(15);
})  

test("Search for String(Food",async ()=>{
    const body = render(
    <StaticRouter>
    <Provider store={store}><Body/></Provider>
    </StaticRouter>
    )

    await waitFor(()=>expect(body.getByTestId('search')))

    const input = body.getByTestId('search-ip');fireEvent.change(input, {
        target:{
            value:"food"
        }
    })
    const searchBtn = body.getByTestId('search')
    fireEvent.click(searchBtn)

    const resList = body.getByTestId('res-list');
    expect(resList.children.length).toBe(3);
})