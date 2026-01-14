"use server"
export const HandleSubmit = async (e) => {

    const response = await fetch("https://kharajch.vercel.app/api/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                name: e.get('name'),
                email: e.get('email'),
                message: e.get('message'),

            }),

    });
}