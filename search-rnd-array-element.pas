program SearchRndElementInRndArray;
uses crt;
const N = 10;
var
  a: array [1..N] of integer;
  k: integer;
  isFound: boolean;
  i: integer;
begin
  randomize;

  for i := 1 to N do 
  begin
    a[i] := Random(15);
  end;
  
  writeln('Filled random array: ');
  for i := 1 to N do
  begin
    write(a[i], ' ');
  end;  
  
  writeln;  
 
  k := Random(15);
 
  IsFound := False;
  for i:=1 to N do
  begin
    if a[i] = k then 
    begin
      IsFound := True;
      break;
    end;
  end;
 
  if IsFound then
  begin
    writeln('Element ', k, ' is found!');
  end  
  else
  begin
    writeln('Element ', k, ' not found');
  end;  
end.