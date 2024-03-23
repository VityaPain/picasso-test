import { FC, HTMLProps, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";
import clsx from 'clsx'

import { PostType } from "../../model"
import { useGetPostsQuery } from "../../service"

import { Post } from "./post";
import './post-list.scss'

export type PostListProps = HTMLProps<HTMLUListElement>

export const PostList: FC<PostListProps> = ({className, ...rest}) => {
    const [postStart, setPostStart] = useState(0);
    const { data = [] } = useGetPostsQuery({
      start: postStart,
    });

    const { ref: firstCard, inView: inViewFirstCard } = useInView({
      threshold: 0.5,
    });
  
    const { ref: lastCard, inView: inViewLastCard } = useInView({
      threshold: 0.5,
    });
  
    useEffect(() => {
      if (inViewFirstCard) {
        setPostStart((prev) => prev > 0 ? prev - 1 : prev);
      }
    }, [inViewFirstCard]);
  
    useEffect(() => {
      if (inViewLastCard) {
        setPostStart((prev) => prev + 1);
      }
    }, [inViewLastCard]);
    
    return (
        <ul className={clsx('post-list', className)} {...rest}>
            {data.map((p: PostType, i: number, arr: PostType[]) => (
                i === 0 
                    ? (<li ref={firstCard} key={p.id}><Post post={p}/></li>)
                    : i === arr.length - 1
                        ?  (<li ref={lastCard} key={p.id}><Post post={p}/></li>)
                        :  (<li key={p.id}><Post post={p}/></li>)
            ))}
        </ul>
    )
}