USE movie_db;

INSERT INTO movies (movie_name) 
VALUES ("Iron Giant"),
       ("Blade Runner"),
       ("Dune"),
       ("Bullet Train"),
       ("TENET"),
       ("Interstellar"),
       ("Arrival"),
       ("Annihilation"),
       ("Prey"),
       ("Logan's Run");

INSERT INTO reviews (movie_id, review) 
    VALUES (1, "A very lovable robot destroys a small town."),
           (2, "Artificial humans fighting for their existence."),
           (3, "What is going on in this movie?"),
           (4, "Bradd Pitt gets better the older he gets."),
           (5, "I don't know what's real anymore..."),
           (6, "Whos kid is whos again?"),
           (7, "Challenges linguistic determinism."),
           (8, "Named after a book it has little to do with."),
           (9, "Amber Midthunder kills extraterrestrials and stereotypes."),
           (10, "Over 30 man sticks it to the MAN.");
