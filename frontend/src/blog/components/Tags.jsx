
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { tags } from '../helper/helper';

export const Tags = () => {
    const [existTags, setExistTags] = useState(tags);
    

    // const { data, error } = useFetch('http://localhost:3000/api/blog/tags');
    // const { data, error } = useFetch(helper);
    // useEffect(() => {
    //     tags.length > 0
    //         ? setExistTags(tags)
    //         : setExistTags([]);
    // }, [tags]);

    // if (error) {
    //     console.error('Error fetching tags:', error);
    // }

    return (
        <div className="flex flex-wrap gap-2">
            {existTags.map((tag) => (
                <span
                    key={tag}
                    className=""
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}