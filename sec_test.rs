#FILL
#NO_FILL

!OUTPUT text

$variable = 'John'
$array = characters = ['John', 'Jane', 'Doe']
$matrix = positions = {{'1,1', '1,2'}, {'2,1', '2,2'}}
$object = details = {'name': 'John', 'age': '25'}

!FUNCTION Introduction($name) {
    !RETRY Introduction
    @character(name=$name, age='25', description='A tall man with black hair', background='Born in the city', motivation='Seeking adventure')
    ~tone cheerful
}

@location(place='New York', time_period='Present Day', mood='Sunny')
@time(day_or_night='Day', specific_time='Morning')

@interaction(character1='John', character2= 'Jane' , type='dialogue')

@story_element(type='climax', details='John finds a mysterious map')
@color(color_palette='Warm', symbolic_meaning='Happiness')
@smell(description='Freshly baked bread', intensity='medium')
@texture(surface='Wooden', feel='Smooth')
@taste(food_or_drink='Coffee', flavor_description='Bitter with a hint of caramel')
@set(set_design='Urban street', set_type='Outdoor')
@prop(object='Map', symbolic_value='Quest')
@camera(film_or_video='film', camera_type='DSLR', frame_rate='24fps', lenses='35mm')
@composition(composition_style='Wide', framing='Rule of Thirds')
@weather(current='Sunny', transition_to='Rain', transition_time='Evening')
@environment(effect='fog', intensity='low')
@post_production(color_grading='Sepia', visual_effect='None', editing_style='Linear')
@audio_cue(type='ambient', description='Birds chirping')
@inner_thought(character='John', reflection='What does this map lead to?')
@voiceover(character='Narrator', narration='And so, the adventure begins...')
@humor(type='pun', content='This map points north, but it's just a northern myth!')

~tone mysterious
~extra John looks around, trying to find clues
~pace medium
~emotion curiosity
~language English

!IF name == 'John' THEN !REFINE Introduction ELSE !RETRY Introduction
!LOOP 3 !CHAIN @interaction -> @color !LOOP n Command
!SWITCH name CASE 'John' CASE 'Jane'
!RANDOM @smell, @taste
!REVIEW
!ERROR_LOG
!TRACE
!HISTORY
!SUGGEST
!COMPARE Introduction, @location

