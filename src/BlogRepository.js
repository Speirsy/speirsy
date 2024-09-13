import { collection, doc, getDocs, getDoc, setDoc, addDoc, deleteDoc, serverTimestamp, orderBy, query } from "firebase/firestore";
import { db } from "./firebase"; // Ensure correct path to Firebase config

const blogsCollection = 'blog_speirsy';
const blogsRef = collection(db, blogsCollection);

// Function to get a list of all blogs, ordered by timestamp in descending order
export const getBlogs = async function() {
    try {
        // Query Firestore to order blogs by timestamp, with latest first
        const blogsQuery = query(blogsRef, orderBy('timestamp', 'desc'));
        const blogsSnapshot = await getDocs(blogsQuery);
        
        let blogs = [];
        blogsSnapshot.docs.forEach(doc => {
            let blog = doc.data();
            blog.id = doc.id; // Use Firestore's document ID
            blogs.push(blog);
        });

        return blogs; // Return the array of blogs
    } catch (err) {
        console.error("Error fetching blogs:", err.message);
        return [];
    }
};

// Function to add a new blog or update an existing one in the 'blog_speirsy' collection
export const saveBlog = async function(blog) {
    try {
        let docRef;

        const blogWithTimestamp = {
            ...blog,
            timestamp: serverTimestamp() // Ensure the timestamp is set properly
        };

        // If the blog has an ID, update the existing document
        if (blog.id) {
            docRef = doc(db, blogsCollection, blog.id);
            await setDoc(docRef, blogWithTimestamp); // Update the document
        } else {
            // If no ID, add a new blog and let Firestore generate the ID
            docRef = await addDoc(blogsRef, blogWithTimestamp);
        }

        return { ...blogWithTimestamp, id: docRef.id };
    } catch (err) {
        console.error("Error saving blog:", err.message);
        throw err;
    }
};
