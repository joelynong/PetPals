package org.generation.PetPals.service;

import org.generation.PetPals.repository.entity.*;

import java.util.List;

public interface PostService {

    post save(post post);

    void delete(int postIndex);

    List<post> all();

    post findPostByIndex(int postIndex);
}
