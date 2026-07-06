

const Header = () => { 
    return <h1>Tech Insights Blog</h1>
}


const Post = () => { 
    return (
        <div>
            <h2>Why Learning React is Worth It</h2>
            <p>React is one of the most popular JavaScript libraries for building modern user interfaces. It helps developers create reusable components, making applications easier to maintain and scale. Learning React opens many opportunities in front-end development.</p>
        </div>
    )
}


const Footer = () => {
    return <p>© 2026 Tech Insights Blog. All rights reserved.</p>
}


const Blog = () =>{
    return (

        <div>
                <Header/>
                <Post/>
                <Footer/>
    </div>
    )
    
}


export default Blog;