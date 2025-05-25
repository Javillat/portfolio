
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { tags } from '../helper/helper';

export const Tags = () => {
    const [existTags, setExistTags] = useState([]);

    // const { data, error } = useFetch('http://localhost:3000/api/blog/tags');
    // const { data, error } = useFetch(helper);
    useEffect(() => {
        if (tags) {
            setExistTags(tags);
        }
    }, [tags]);

    // if (error) {
    //     console.error('Error fetching tags:', error);
    // }
    console.log('existTags', existTags);


    return (
        <div className="flex flex-wrap gap-2">
            {existTags.map((tag) => (
                <span
                    key={tag}
                    className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}