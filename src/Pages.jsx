import About from "./components/About";
import Title from "./components/Title";

function MainPages() {
    return(
        <div>
            <h2>Main pages component</h2>
            <About info={{title: "Some Title", body:"Somebody"}}/>
            <Title title="hello world"/>
        </div>
    )
}


export default MainPages