import { FC, HTMLProps } from "react"
import { useNavigate } from "react-router-dom";

import { PostType } from "../../../model"
import clsx from 'clsx'

import { Button } from "../../../../../shared/button/ui/index"

export type PostProps = {
    post: PostType,
} & HTMLProps<HTMLDivElement>

export const Post: FC<PostProps> = ({post, className, ...rest}) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`${post.id}`)
    }

    return (
        <div className={clsx('post-list__item', className)} {...rest} >
            <div className="post-list__item-info">
                <h3># {post.id}</h3>
                <h1>{post.title}</h1>
                <p>
                    { post.body.length > 70
                        ? post.body.substring(70) + '...'  
                        : post.body  
                    }
                </p>
            </div>
            <Button label={'Подробнее'} onClick={clickHandler}/>
        </div>
    )
}