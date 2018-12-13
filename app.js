planck.testbed('Pinball', function (testbed) {
    var pl = planck, Vec2 = pl.Vec2;
    var world = new pl.World(Vec2(0, -10));
    
    // testbed.hz = 1;
    // testbed.speed = 1;

    const sceneSize = 1;
    const generationPeriod = 25;

    const pt1 = Vec2(-70.0, -15.0);
    const pt2 = Vec2(70.0, -15.0);
    const pt3 = Vec2(pt1.x, pt1.y+sceneSize*10);
    const pt4 = Vec2(pt2.x, pt2.y + sceneSize*10);
    world.createBody().createFixture(pl.Edge(pt1, pt2));
    world.createBody().createFixture(pl.Edge(pt1, pt3));
    world.createBody().createFixture(pl.Edge(pt2, pt4));
    world.vtcl = {min: pt1.y, max: pt3.y };
    world.hztl = { min: pt1.x+sceneSize*5, max: pt2.x-sceneSize*5 };
    

    let generation = new Generation(world, 10);
    generation.initialize(Robot, sceneSize);
    generation.test();

    // Restart Generation after 5 seconds
    setInterval(() => {
        generation.evolve();
        // console.log(generation.avg_score);
        // settled = false;
    }, 5000);

    testbed.step = function () {
        // rdoll.rot()
        // box1.applyAngularImpulse(-100);
        // console.log(mouse.getPosition())
    }


    return world;
});