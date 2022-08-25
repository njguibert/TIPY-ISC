int btn=8,led=13;

char dato;
bool btn_estado=false;
bool btn_lasttEstado = false;
void setup()
{
  pinMode(btn,INPUT);
  pinMode(led, OUTPUT);
  Serial.begin(9600);
  
}

void loop()
{
  btn_estado=digitalRead(btn);
  if(btn_estado != btn_lasttEstado){
    Serial.print("Estado del pulsador: ");
    Serial.println(btn_estado);
    btn_lasttEstado = btn_estado;
  }
  delay(500);
  //agregar modificacion
  if ( Serial.available()>0) {
    dato=Serial.read();
    //Serial.println(dato);
    if (dato=='p') digitalWrite(led,HIGH);
    if (dato=='a') digitalWrite(led,LOW);
  }
  
  
}
