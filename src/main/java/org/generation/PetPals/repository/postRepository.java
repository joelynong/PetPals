package org.generation.PetPals.repository;

import org.generation.PetPals.repository.entity.*;
import org.springframework.data.repository.*;

public interface postRepository extends CrudRepository<post, Integer>
{
    post findPostByIndex(Integer index);
}

//ItemRepository extends CrudRepository Class and it is able to access the
//methods that is available in the CrudRepository Class