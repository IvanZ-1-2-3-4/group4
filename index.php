<head>
    <script src="jquery.min.js"></script>
    <script src="game-script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<div class="game-container">
    <?php
        for ($i = 1; $i <= 100; $i++) {
            echo "<div id=\"" . $i . "\"></div>";   
        }
    ?>
</div>
</br>
<button id="reset">Reset</button></br>
<button id="begin">Begin simulation</button></br>

<input style="width: 400px;" type="range" min="0" max="100" value="0" id="range"></br>

Percentage of population vaccinated:&nbsp<span id="value">0</span></br>
Number of generations: 12
</br>
<a href="new.php">new</a>
<a href="old.php">old</a>