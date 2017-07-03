#!/bin/sh

command -v fbsgen-ds >/dev/null 2>&1 && { fbsgen-ds; exit 0; }

JAR=target/fbsgen-ds.jar

[ -e $JAR ] || { echo "$JAR not found."; exit 1; }

java -Dtemplate_path=. \
    -Dproto_path=p \
    -Dproto_search_strategy=4 \
    -Dfbsgen.print_stack_trace=false \
    -Dfbsgen.sequential_field_numbers=true \
    -Dfbsgen.enum_allow_negative=false \
    -jar $JAR _.properties $@


