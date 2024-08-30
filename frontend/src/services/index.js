//all blog data get services
export async function fetchBlogs() {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/getAll`, {
        cache: "no-store"
    });
    if (res.ok) {
        return res.json();
    }
    throw new Error('Failed to fetch blogs');
}


//resent blog data get services
export async function fetchRecentBlog() {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/getRecentBlogs`, {
        cache: "no-store"
    });
    if (res.ok) {
        return res.json();
    }
    throw new Error('Failed to fetch blogs');
}

//any single blog data get servies
export const fetchBlogById = async (id) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/getBlog/${id}`, {
            cache: "no-store"
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            console.error("Failed to fetch user profile:", res.statusText);
            return null; // Return null or throw an error based on your error handling strategy
        }
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null; // Return null or throw an error based on your error handling strategy
    }
}

// Update a single blog
export const updateBlogById = async (id, updateData) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/updateBlog/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(updateData)
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            console.error("Failed to update blog:", res.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error updating blog:", error);
        return null;
    }
};

//post blog
export const postBlog = async (updateData) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/post`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(updateData),
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            // Enhanced error logging
            const errorData = await res.json();
            console.error("Failed to post blog:", res.statusText, errorData);
            return null;
        }
    } catch (error) {
        console.error("Error posting blog:", error);
        return null;
    }
};

