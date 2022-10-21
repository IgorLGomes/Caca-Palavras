matriz = new Array;
document.write("<table border='0'>" + "<tr>");
    matriz = [
    ["<td>O</td>","<td>A</td>","<td>O</td>","<td class='A'>M</td>"," <td class='A'>E</td>","<td class='A'>S</td>","<td class='A'>S</td>","<td class='A'>A</td>","<td>N</td>","<td>C</td>","<td>F</td>","<td>T</td>",], 
    ["<td>E</td>","<td>W</td>",	"<td>A</td>",	"<td>I</td>",	"<td >D</td>",	"<td >U</td>",	"<td >S</td>",	"<td >T</td>",	"<td >I</td>",	"<td >N</td>",	"<td>E</td>",	"<td >S</td>"],
    ["<td>E</td>",	"<td class='A'>L</td>",	"<td>B</td>",	"<td>N</td>",	"<td>I</td>",	"<td>C</td>",	"<td>M</td>",	"<td>U</td>",	"<td>A</td>",	"<td>E</td>",	"<td >T</td>",	"<td>N</td>"],
    ["<td>B</td>",	"<td class='A'>U</td>",	"<td >X</td>",	"<td>C</td>",	"<td>H</td>",	"<td>I</td>",	"<td>N</td>",	"<td>S</td>",	"<td>E</td>",	"<td >E</td>",	"<td class='A'>R</td>",	"<td>S</td>"],
    ["<td>I</td>",	"<td class='A'>M</td>",	"<td class='A'>O</td>",	"<td class='A'>U</td>",	"<td class='A'>S</td>",	"<td class='A'>E</td>",	"<td>W</td>",	"<td >O</td>",	"<td >V</td>",	"<td class='A'>O</td>",	"<td >B</td>",	"<td>T</td>"],
    ["<td>K</td>",	"<td class='A'>I</td>",	"<td>M</td>",	"<td>N</td>",	"<td>C</td>",	"<td >A</td>",	"<td>T</td>",	"<td >E</td>",	"<td class='A'>T</td>",	"<td>O</td>",	"<td >I</td>",	"<td>A</td>"],
    ["<td>E</td>",	"<td class='A'>N</td>",	"<td >J</td>",	"<td>E</td>",	"<td>I</td>",	"<td >N</td>",	"<td>O</td>",	"<td class='A'>I</td>",	"<td >N</td>",	"<td>T</td>",	"<td >L</td>",	"<td>O</td>"],
    ["<td>Y</td>",	"<td class='A'>A</td>",	"<td >I</td>",	"<td>Y</td>",	"<td>H</td>",	"<td >C</td>",	"<td class='A'>N</td>",	"<td>B</td>",	"<td >I</td>",	"<td>F</td>",	"<td >L</td>",	"<td>M</td>"],
    ["<td>H</td>",	"<td class='A'>R</td>",	"<td >M</td>",	"<td >L</td>",	"<td >M</td>",	"<td class='A'>O</td>",	"<td>J</td>",	"<td>C</td>",	"<td >B</td>",	"<td>L</td>",	"<td >Y</td>",	"<td>S</td>"],
    ["<td>A</td>",	"<td class='A'>I</td>",	"<td>O</td>",	"<td>A</td>",	"<td class='A'>M</td>",	"<td>I</td>",	"<td>I</td>",	"<td>H</td>",	"<td >O</td>",	"<td>R</td>",	"<td>H</td>",	"<td>E</td>"],
    ["<td>R</td>",	"<td class='A'>A</td>",	"<td>I</td>",	"<td>D</td>",	"<td>P</td>",	"<td>R</td>",	"<td>E</td>",	"<td>D</td>",	"<td >R</td>",	"<td>C</td>",	"<td>K</td>",	"<td>I</td>"],
    ]

    for(linha=0;linha<12;linha++){
    for(coluna=0;coluna<12;coluna++){
    document.write(matriz[linha][coluna]);
    }
    document.write("</tr>");
}