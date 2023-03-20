import React from 'react';
import './styles.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';


const Post = ({post, setCurrentId}) => {

  return (
    <Card className='card'>
      <CardMedia className='media' image={post.selectedFile} title={post.tite}/>
      <div className='overlay'>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='h6'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className='overlay2'>
        <Button 
          style={{color: 'white'}} 
          size='small' 
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize='medium'/>
        </Button>
      </div>
      <div className='details'>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>

      </div>
      <CardContent>
        <Typography className='title' variant='h5' gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className='cardActions'>
        <Button size='small' color='primary' onClick={() => {}}>
          <FavoriteBorderIcon fontSize='small'/>
          Like
          {/* {post.likeCount} */}
        </Button>
        <Button size='small' color='primary' onClick={() => {}}>
          <DeleteIcon fontSize='small'/>
          Delete
        </Button>
      </CardActions> 
    </Card>
  );
}

export default Post;