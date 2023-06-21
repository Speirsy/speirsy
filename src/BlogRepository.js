import { collection, doc, getDocs, getDoc, setDoc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";


const blogsCollection = 'blog_speirsy';
const blogsRef = collection(db, blogsCollection);

// Gets a list of all blogs from the blgs collection
export const getBlogs = async function(){
    try {
        const blogsSnapshot = await getDocs(blogsRef)
        let blogs = [];
        blogsSnapshot.docs.forEach(s => {
            let blog = s.data();
            blog.id = s.id;
            blogs.push(blog);
        });
        return blogs;
    }
    catch(err){
        console.error(err.message);
        return [];
    }
}

// Gets a blog from the blogs collection by their id 
export const getBlog = async function(id){
    try {
        const docRef = doc(db, blogsCollection, id);
        const docSnapshot = await getDoc(docRef);
        return docSnapshot ? docSnapshot.data(): null;    
    }
    catch(err){
        console.error(err.message);
        return null;
    }
}

// Adds/updates a blog to the blogs collection
export const saveBlog = async function(blog){
    try {
        let docRef;
        if (blog.id){
            docRef = doc(db, blogsCollection, doc.id);
            await setDoc(docRef, blog);  
        }
        else {
            docRef = doc(db, blogsCollection);
            await addDoc(docRef, blog);    
        }   
    }
    catch(err){
        console.error(err.message);
    }
}

// Deletes a blog from the blogs collection
export const deletePerson = async function(blog){
    try {
        const docRef = doc(db, blogsCollection, blog.id);
        await deleteDoc(docRef);
    }
    catch(err){
        console.error(err.message);
    }
}
