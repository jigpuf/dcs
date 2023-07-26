import ReactFragment from "react"

const VSCExtentions = () =>{
    return(
        <div>
            <h1>VSC Extentions</h1>
            <li>Prettier</li>
            In settings:
                <ol>
                    <li>Format on Paste</li>
                    <li>Format on Save</li>
                    <li>Default formatter set to prettier</li>
                </ol>
            <li>Emmit</li>
            Emmit make building faster by making suggestions and allowing a shorthand form of programming
            <ol>
                <li>! makes an HTML boilerplate</li>
                <li>Greater than creates children so body, greater than, section will created the body with a nested section tag </li>
                <li>+ Creates siblings</li>
                <li>^ moves back up a level when giving long emmit stuff, kind of like file paths</li>
                <li>* will repeat the action multiple times based on the linber after eg. li*4</li>
                <li>$ will create an incrementing number every time the actio repeats eg a[id='$''] would add a number every time</li>
                <li></li>
                <li></li>

            </ol>
        </div>
    )
}
export default VSCExtentions