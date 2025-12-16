import { useEffect, useState } from "react";

/**
 * <title> 내용을 바꿔주는 Hooks
 */
export default function useTitle(initialTitle) {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        console.log(`initialTitle : ${initialTitle}`);
        console.log(`title : ${title}`);
        const htmlTitle = document.querySelector(".title");
        htmlTitle.innerText = title;
    }

    useEffect(updateTitle, [title]); // useEffect(ComponentDidMount, ComponentDidUpdate)
    return setTitle;
}