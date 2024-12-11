export default function armutInDeutschland(){

  return(
    <>
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/reichstag.jpeg")' }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Armut in Deutschland und ihre politische Dimension</h1>
        <p className="text-lg">In Deutschland prägen politische Entscheidungen die Lebensbedingungen vieler Menschen. Der Sitz der Regierung im Reichstag ist das Zentrum dieser Entscheidungen. Doch wie wirkt sich dies auf die sozioökonomischen Ungleichheiten aus?</p>
      </div>
    </div>

    </>
  );
}