package org.generation.PetPals.service;

import org.generation.PetPals.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;
import org.generation.PetPals.repository.entity.*;

import java.util.*;

@Service
public class PostServiceMySQL implements PostService {

    private final postRepository postRepository;

    public PostServiceMySQL(@Autowired postRepository postRepository)
    {
        this.postRepository = postRepository;
    }

    //save method is in the service layer, and will be called by the controller
    @Override
    public post save(post post)
    {
        //Save an item into the database
        //Perform the action CRUD - Create (new item), Update (existing item)
        return this.postRepository.save(post);
    }

    @Override
    public void delete(int postIndex)
    {
        //Delete an item from the database
        //Perform CRUD - Delete
        this.postRepository.deleteById(postIndex);
    }

    @Override
    public List<post> all()
    {
        //List all the items from the database
        //Perform CRUD - Read
        List<post> result = new ArrayList<>();
        this.postRepository.findAll().forEach(result::add);
        return result;      //in a form of List (ArrayList)
    }

    @Override
    public post findPostByIndex(int postIndex)
    {
        Optional<post> post = this.postRepository.findById(postIndex);
        post postResponse = post.get();
        return postResponse;
    }

}
