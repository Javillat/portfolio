
import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { tags } from '../helper/helper';

export const Tags = () => {
    const [existTags, setExistTags] = useState(tags);
    
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