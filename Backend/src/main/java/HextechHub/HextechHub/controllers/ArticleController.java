package HextechHub.HextechHub.controllers;

import HextechHub.HextechHub.entities.Article;
import HextechHub.HextechHub.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/articles")
@CrossOrigin(origins = "*")
public class ArticleController {


    @Autowired
    private ArticleRepository articleRepository;


    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {


        Article savedArticle = articleRepository.save(article);


        return new ResponseEntity<>(savedArticle, HttpStatus.CREATED);
    }
}