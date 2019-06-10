<?php
    $j = 0;
    for ($i = 1; $i <= 100; $i++) {
        echo "<div id=\"" . $i . "\"></div>";
        $j++;
        
    }
    echo "<script>console.log(\"" . $j . "\");</script>";
?>