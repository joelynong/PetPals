package org.generation.PetPals.controller;

import org.generation.PetPals.controller.dto.*;
import org.generation.PetPals.repository.entity.*;
import org.generation.PetPals.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.util.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.*;

import java.io.*;

@RestController
@RequestMapping("/post")

public class PostController {
    final PostService postService;

    //Autowired will implicit inject the ItemService as a dependency to ItemController
    //so that we can call the methods in the ItemService
    public PostController(@Autowired PostService postService)
    {
        this.postService = postService;
    }

    //GetMapping is the route that correspond to the HTTP GET method calls from the client
    //Cross-origin resource sharing (CROS)
    @CrossOrigin
    @GetMapping("/all")
    public Iterable<post> getPosts()
    {
        return postService.all();
    }

    @CrossOrigin
    @GetMapping("/{index}")
    public post findPostByIndex(@PathVariable Integer index)
    {
        return postService.findPostByIndex(index);
    }

    @CrossOrigin
    @DeleteMapping("/{index}")
    public void delete(@PathVariable Integer index)
    {
        postService.delete(index);
    }

    @CrossOrigin
    @PostMapping("/add")
    public post save(
                       @RequestParam(name="name", required = true) String name,
                       @RequestParam(name="topic", required = true) String topic,
                       @RequestParam(name="avatar", required = true) String avatar,
                       @RequestParam(name="text", required = true) String text,
                       @RequestParam(name="image", required = false) String image,
                       @RequestParam(name="time", required = true) String time) {

        PostDTO postDTO = new PostDTO(name, topic, avatar, text, image, time);
        return postService.save(new post(postDTO));
    }

}
